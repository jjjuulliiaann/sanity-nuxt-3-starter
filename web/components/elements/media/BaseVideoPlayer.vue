<template>
	<figure
		ref="videoPlayerEl"
		class="VideoPlayer"
		:class="{
			VideoPlayer_initial: isInitial,
			VideoPlayer_playing: isPlaying,
		}"
	>
		<video
			ref="videoEl"
			class="VideoPlayer_Video"
			:poster="posterSrc"
			:width="videoWidth"
			:height="videoHeight"
			playsinline
			preload="metadata"
			crossorigin="anonymous"
			@loadeddata="setupProgress"
			@timeupdate="updateProgress"
			@canplaythrough="handleCanPlay"
			@playing="setPlayStatus('playing')"
			@pause="setPlayStatus('pause')"
		></video>

		<button class="VideoPlayer_Cover" @click="togglePlay">
			<ElementsIconsPlayIcon />
		</button>

		<ul v-show="!isInitial" class="VideoPlayer_Controls">
			<li>
				<button
					class="VideoPlayer_Controls_Button VideoPlayer_Controls_Button_playpause"
					@click="togglePlay"
				>
					<span v-show="!isPlaying && !isLoaded"
						><ElementsIconsLoadingIcon
					/></span>
					<span v-show="!isPlaying && isLoaded"
						><ElementsIconsPlayIcon
					/></span>
					<span v-show="isPlaying"><ElementsIconsPauseIcon /></span>
				</button>
			</li>
			<li class="VideoPlayer_Progress">
				<div
					class="VideoPlayer_Progress_Container"
					@click="setProgress"
					@mousemove="updateProgressHover"
				>
					<progress
						ref="progressEl"
						:value="currentTime"
						min="0"
						:max="totalTime"
					></progress>
					<span
						class="VideoPlayer_Progress_Indicator"
						:style="progressHoverStyle"
					></span>
				</div>
			</li>
			<li class="VideoPlayer_Time">
				<span class="text-sm text_white text_bold">
					{{ remainingTimeString }}</span
				>
			</li>
			<li>
				<button
					class="VideoPlayer_Controls_Button"
					@click="toggleFullscreen"
				>
					<span
						><ElementsIconsFullscreenIcon
							:is-fullscreen="isFullscreen"
					/></span>
				</button>
			</li>
		</ul>
	</figure>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'

// props
const props = defineProps({
	video: {
		type: Object,
		required: true,
	},

	posterImage: {
		type: Object,
		default: () => undefined,
	},
})

// elements
const videoPlayerEl = ref(null)
const videoEl = ref(null)
const progressEl = ref(null)

// variables
const isInitial = ref(true)
const isLoaded = ref(true)
const isPlaying = ref(false)
const currentTime = ref(0)
const totalTime = ref(0)
const progressHoverPosition = ref(0)

// dimensions
const videoWidth = computed(
	() => props.video?.muxVideo?.asset?.data?.tracks[0]?.max_width
)
const videoHeight = computed(
	() => props.video?.muxVideo?.asset?.data?.tracks[0]?.max_height
)

/*
poster image
*/
const { $urlFor } = useNuxtApp()
const posterSrc = computed(() =>
	$urlFor(props.posterImage)
		.width(videoWidth.value ?? 1000)
		.url()
)
watch(posterSrc, (newPosterSrc) => {
	console.log('new poster source! ' + newPosterSrc.value)
})

/*
load video
*/
useMuxStream(props.video?.muxVideo?.asset?.playbackId, videoEl)

/*
control video
*/
const togglePlay = () => {
	if (videoEl.value.paused || videoEl.value.ended) {
		videoEl.value.play()
	} else {
		videoEl.value.pause()
	}
}

const pauseVideo = () => {
	videoEl.value.pause()
}

/*
control video states
*/
const handleCanPlay = () => {
	isLoaded.value = true
}

/*
video progress
*/

const remainingTimeString = computed(() => {
	const remainingTime =
		totalTime.value - currentTime.value > 0
			? totalTime.value - currentTime.value
			: 0
	let minutes = Math.floor(remainingTime / 60)
	minutes = minutes >= 10 ? minutes : `0${minutes}`
	let seconds = Math.floor(remainingTime % 60)
	seconds = seconds >= 10 ? seconds : `0${seconds}`
	return `-${minutes}:${seconds}`
})

const progressHoverStyle = computed(
	() => `left: ${progressHoverPosition.value}%`
)

const setupProgress = () => {
	if (!videoEl.value) {
		return false
	}
	totalTime.value = videoEl.value.duration
	progressEl.value.setAttribute('max', videoEl.value.duration)
}

const updateProgress = () => {
	currentTime.value = videoEl.value.currentTime

	// end video
	if (videoEl.value.ended) {
		isPlaying.value = false
	}
}

const setProgress = (event) => {
	const rect = progressEl.value.getBoundingClientRect()
	const pos = (event.pageX - rect.left) / progressEl.value.offsetWidth
	videoEl.value.currentTime = pos * videoEl.value.duration
}

const setPlayStatus = (status) => {
	isPlaying.value = status === 'playing'
	if (isInitial.value) {
		isInitial.value = false
	}
}

const updateProgressHover = (event) => {
	const rect = progressEl.value.getBoundingClientRect()
	const pos = (event.pageX - rect.left) / progressEl.value.offsetWidth
	progressHoverPosition.value = pos > 0 ? pos * 100 : 0
}

/*
fullscreen
*/
const { isFullscreen, toggle } = useFullscreen(videoPlayerEl)

const toggleFullscreen = () => {
	toggle()
}
</script>

<style scoped>
.VideoPlayer {
	position: relative;
	width: 100%;
	height: auto;
	margin: 1rem 0;
	line-height: 0;
}

/* video */

.VideoPlayer_Video {
	position: relative;
	width: 100%;
	height: auto;
}

.VideoPlayer_initial .VideoPlayer_Video {
	object-fit: cover;
	background: none;
}

.VideoPlayer:fullscreen .VideoPlayer_Video {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
	background: rgb(var(--clr-black));
}

/* cover */

.VideoPlayer_Cover {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	opacity: 0;
	cursor: default;
	transition: opacity 0.2s ease;
}

.VideoPlayer_initial .VideoPlayer_Cover {
	opacity: 1;
	cursor: pointer;
}

.VideoPlayer_Cover:deep(.PlayIcon) {
	height: 4rem;
	transition: transform 0.2s ease-out;
}

@media (hover: hover) and (pointer: fine) {
	.VideoPlayer_Cover:hover:deep(.PlayIcon) {
		transform: scale(1.2);
	}
}

/* controls */

.VideoPlayer_Controls {
	position: absolute;
	display: flex;
	right: 1rem;
	left: 1rem;
	bottom: 1rem;
	padding: 0 0.5rem;
	margin: 0;
	z-index: 2;
	background: rgb(var(--clr-black) / 0.5);
	border-radius: 10rem;
	list-style: none;
	height: 2rem;
	transition: opacity 0.2s 1s ease;
	backdrop-filter: blur(10px);
}

.VideoPlayer_playing .VideoPlayer_Controls {
	opacity: 0;
}

.VideoPlayer:fullscreen .VideoPlayer_Controls {
	background: rgb(60 60 60 / 0.7);
}

@media (hover: hover) and (pointer: fine) {
	.VideoPlayer:hover .VideoPlayer_Controls {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
}

@media (hover: none) and (pointer: coarse) {
	.VideoPlayer_playing .VideoPlayer_Controls {
		opacity: 1;
	}
}

/* buttons */

.VideoPlayer_Controls_Button {
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 0.5rem;
}

.VideoPlayer_Controls_Button > span {
	display: inline-block;
	overflow: hidden;
	line-height: 0;
	min-height: 0.2rem;
}

.VideoPlayer_Controls_Button_playpause {
	padding-right: 1rem;
}

.VideoPlayer_Controls_Button:deep(.PlayIcon),
.VideoPlayer_Controls_Button:deep(.PauseIcon) {
	width: 0.7rem;
}

/* progress */

.VideoPlayer_Progress {
	flex: 1 0 auto;
}

.VideoPlayer_Progress_Container {
	position: relative;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	height: 100%;
	flex: 1 0 auto;
	cursor: pointer;
}

progress {
	position: relative;
	-webkit-appearance: none;
	appearance: none;
	height: 1px;
	width: auto;
}

progress[value] {
	/* Reset the default appearance */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	background: rgb(var(--clr-black));
}

progress[value]::-webkit-progress-bar {
	background: rgb(var(--clr-black));
}

progress[value]::-webkit-progress-value {
	background: rgb(var(--clr-white));
}

progress[value]::-moz-progress-bar {
	background: rgb(var(--clr-white));
}

.VideoPlayer_Progress_Indicator {
	position: absolute;
	height: 0.6rem;
	width: 0.6rem;
	border-radius: 10rem;
	left: 0;
	top: 50%;
	transform: translate(-0.3rem, -50%);
	opacity: 0;
	background: rgb(var(--clr-white));
}

@media (hover: hover) and (pointer: fine) {
	.VideoPlayer_Progress_Container:hover .VideoPlayer_Progress_Indicator {
		opacity: 1;
	}
}

/* time */

.VideoPlayer_Time {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	padding: 0rem 0.5rem 0 1rem;
}
</style>
