<template>
	<figure
		class="VideoLoop"
		:class="[
			isPlaying && 'VideoLoop_playing',
			isPortrait && 'VideoLoop_portrait',
		]"
	>
		<video
			ref="videoEl"
			class="VideoLoop_Video"
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
		<ElementsMediaBaseImage
			v-if="props.posterImage"
			:image="props.posterImage"
			:alt="props.video?.alt"
		/>
		<img
			v-else
			:src="posterSrc"
			:width="videoWidth"
			:height="videoHeight"
			:alt="props.video?.alt"
			loading="lazy"
		/>
	</figure>
</template>

<script setup>
const props = defineProps({
	/* 
	Object containing a muxVideo. 
	*/
	video: {
		type: Object,
		default: () => undefined,
	},

	/* 
	Without a posterimage the first frame from the mux video is used.
	*/
	posterImage: {
		type: Object,
		default: () => undefined,
	},

	/* 
	Use mp4 instead of hls.
	*/
	preferMp4: {
		type: Boolean,
		default: () => true,
	},

	/* 
	Should the video load a smaller mp4 version from mux (only applicable if preferMp4 is true).
	*/
	useSmallResolution: {
		type: Boolean,
		default: () => false,
	},

	/* 
	Defines if the video should preload. If false the video loads when becoming visible.
	Loading starts as soon as preload is set to true.
	*/
	preload: {
		type: Boolean,
		default: () => false,
	},
})

/*
variables
*/
const videoEl = ref(null)
const isPlaying = ref(false)
const isLoaded = ref(false)
const isInit = ref(false)

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
const isPortrait = computed(() => videoWidth.value < videoHeight.value)
const aspectRatioStyle = computed(
	() => `${videoWidth.value} / ${videoHeight.value}`
)

/*
poster image
*/
const posterSrc = computed(() => {
	return props.video?.muxVideo?.asset?.playbackId
		? `https://image.mux.com/${props.video?.muxVideo?.asset?.playbackId}/thumbnail.jpg?time=0`
		: ''
})

/*
setup
*/
const emit = defineEmits(['loaded'])
const { appendVideo } = useMuxStream({
	muxVideo: props.video?.muxVideo,
	videoEl: videoEl,
	preferMp4: props.preferMp4,
	useSmallResolution: props.useSmallResolution,
})

/*
load video
*/
const loadVideo = () => {
	if (!isInit.value) {
		appendVideo()
		videoEl?.value?.load()
		isInit.value = true
	}
}

/*
handle play state
*/
const updatePaused = (event) => {
	isPlaying.value =
		!event.target.paused &&
		!event.target.ended &&
		event.target.readyState > event.target.HAVE_CURRENT_DATA
	// set loading state
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
			loadVideo()
			playVideo()
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
preload
*/
const { trigger: triggerPreload } = watchTriggerable(
	() => props.preload,
	(preload) => {
		if (preload) {
			loadVideo()
		}
	}
)

/*
load directly if preload is true
*/
onMounted(() => {
	triggerPreload()
})
</script>

<style scoped>
.VideoLoop {
	position: relative;
}

.VideoLoop > video {
	position: relative;
	aspect-ratio: v-bind('aspectRatioStyle');
	z-index: 2;
}

.VideoLoop:deep(img) {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
}

.VideoLoop_playing:deep(img) {
	display: none;
}
</style>
