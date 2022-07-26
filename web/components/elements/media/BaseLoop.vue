<template>
	<figure>
		<video
			ref="video"
			class="VideoLoop"
			:class="{ VideoLoop_playing: isPlaying }"
			muted
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
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
	video: {
		type: Object,
		default: () => undefined,
	},
})

/* 
variables 
*/
const video = ref(null)
const isPlaying = ref(false)
const isLoaded = ref(false)
const isVisible = useElementVisibility(video)

/* 
dimensions 
*/
const videoWidth = computed(
	() => props.video?.muxVideo?.asset?.data?.tracks[0]?.max_width
)
const videoHeight = computed(
	() => props.video?.muxVideo?.asset?.data?.tracks[0]?.max_height
)

/* 
setup 
*/
const emit = defineEmits(['loaded'])
useMuxStream(props.video?.muxVideo?.asset?.playbackId, video)

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
watch(isVisible, (isVisible) => {
	if (video && isVisible) {
		if (!isPlaying.value) {
			video.value.play()
		}
	} else {
		setTimeout(() => {
			video.value.pause()
		}, 100)
	}
})
</script>
