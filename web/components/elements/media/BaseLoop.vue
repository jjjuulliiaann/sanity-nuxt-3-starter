<template>
	<figure>
		<video
			ref="videoEl"
			class="VideoLoop"
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
	</figure>
</template>

<script setup>
const props = defineProps({
	video: {
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
setup
*/
const emit = defineEmits(['loaded'])
useMuxStream({
	muxVideo: props.video?.muxVideo,
	videoEl: videoEl,
	preferMp4: true,
})

console.log(props.video?.muxVideo?.asset?._id)

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
play only when visible
*/
const { stop } = useIntersectionObserver(
	videoEl,
	([{ isIntersecting }], observerElement) => {
		if (isIntersecting) {
			if (!isPlaying.value && props.isActive) {
				videoEl?.value?.play()
			}
		} else {
			setTimeout(() => {
				videoEl?.value?.pause()
			}, 100)
		}
	}
)
</script>
