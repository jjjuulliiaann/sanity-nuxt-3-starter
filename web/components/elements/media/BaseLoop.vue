<template>
	<figure class="VideoLoop">
		<video
			ref="videoEl"
			class="VideoLoop_Video"
			:class="{ VideoLoop_playing: isPlaying }"
			muted
			playsinline
			disablePictureInPicture
			loop
			preload="metadata"
			:width="videoWidth"
			:height="videoHeight"
			crossorigin="anonymous"
			@canplay="updatePaused"
			@playing="updatePaused"
			@pause="updatePaused"
		></video>
		<img :data-src="posterSrc" class="VideoLoop_Image lazyload" />
	</figure>
</template>

<script setup>
const props = defineProps({
	video: {
		type: Object,
		default: () => undefined,
	},

	posterImage: {
		type: Object,
		default: () => undefined,
	},

	isActive: {
		type: Boolean,
		default: () => true,
	},
})

/*
variables
*/
const videoEl = ref(null)
const isPlaying = ref(false)
const isLoaded = ref(false)

/*
dimensions
*/
const videoWidth = computed(() => {
	const videoTrack = props.video?.muxVideo?.asset?.data?.tracks?.find(
		(el) => el.type === 'video'
	)
	return videoTrack ? videoTrack.max_width : undefined
})
const videoHeight = computed(() => {
	const videoTrack = props.video?.muxVideo?.asset?.data?.tracks?.find(
		(el) => el.type === 'video'
	)
	return videoTrack ? videoTrack.max_height : undefined
})

/*
poster image
*/
const { $urlFor } = useNuxtApp()
const posterSrc = computed(() => {
	if (!props.posterImage) {
		return props.video?.muxVideo?.asset?.playbackId
			? `https://image.mux.com/${props.video?.muxVideo?.asset?.playbackId}/thumbnail.jpg?time=0`
			: ''
	}
	return $urlFor(props.posterImage)
		.width(videoWidth.value ?? 1000)
		.url()
})

/*
setup
*/
const emit = defineEmits(['loaded'])
useMuxStream({
	muxVideo: props.video?.muxVideo,
	videoEl: videoEl,
	preferMp4: true,
})

/*
handle play state
*/
const updatePaused = (event) => {
	isPlaying.value =
		event.target.currentTime > 0 &&
		!event.target.paused &&
		!event.target.ended &&
		event.target.readyState > event.target.HAVE_CURRENT_DATA
	if (!isLoaded.value) {
		isLoaded.value = true
		emit('loaded')
	}
}

/*
play promise
*/
const playVideo = () => {
	// use promise to avoid play interruption
	const playPromise = videoEl?.value?.play()

	if (playPromise !== undefined) {
		playPromise.catch(function (error) {
			// Automatic playback failed
		})
	} else {
		videoEl?.value?.play()
	}
}

/*
play only when visible
*/
const { stop } = useIntersectionObserver(
	videoEl,
	([{ isIntersecting }], observerElement) => {
		if (isIntersecting) {
			if (!isPlaying.value && props.isActive) {
				playVideo()
			}
		} else {
			setTimeout(() => {
				videoEl?.value?.pause()
			}, 100)
		}
	},
	{
		threshold: 0.0,
	}
)

/* 
play when active
*/
watch(
	() => props.isActive,
	(newVal) => {
		if (newVal) {
			playVideo()
		}
	}
)
</script>

<style scoped>
.VideoLoop {
	position: relative;
}

.VideoLoop_Image {
	position: absolute;
	z-index: -1;
	left: 0;
}

.lazyload,
.lazyloading {
	opacity: 0;
}

.lazyloaded {
	opacity: 1;
	transition: opacity 0.75s;
}
</style>
