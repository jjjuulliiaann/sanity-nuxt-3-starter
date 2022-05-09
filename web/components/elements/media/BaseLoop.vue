<template>
	<figure>
		<video
			ref="video"
			class="video-loop"
			:class="{ 'video--playing': isPlaying }"
			muted
			autoplay
			playsinline
			loop
			preload="auto"
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
import Hls from 'hls.js'

const props = defineProps({
	video: {
		type: Object,
		default: () => undefined,
	},
})

// states
const isPlaying = ref(false)
const isLoaded = ref(false)

// dimensions
const videoWidth = computed(
	() => props.video?.muxVideo?.asset?.data?.tracks[0]?.max_width
)
const videoHeight = computed(
	() => props.video?.muxVideo?.asset?.data?.tracks[0]?.max_height
)

// setup
const emit = defineEmits(['loaded'])
const video = ref(null)
const setupVideo = () => {
	if (!props.video?.muxVideo?.asset?.data) {
		return false
	}
	const stream = `https://stream.mux.com/${props.video.muxVideo.asset.playbackId}.m3u8`

	if (Hls.isSupported()) {
		const hls = new Hls()
		hls.loadSource(stream)
		hls.attachMedia(video.value)
	} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		video.value.src = stream
	}
}

onMounted(() => {
	setupVideo()
})

const updatePaused = (event) => {
	isPlaying.value = !event.target.paused
	if (!isLoaded.value) {
		isLoaded.value = true
		emit('loaded')
	}
}
</script>
