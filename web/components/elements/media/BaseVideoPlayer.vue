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
			:style="aspectRatioStyle"
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
			<li class="VideoPlayer_Play">
				<button
					class="VideoPlayer_ControlsButton VideoPlayer_ControlsButton_playpause"
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
			<li
				class="VideoPlayer_Progress"
				@click="setProgress"
				@mousemove="updateProgressHover"
			>
				<div class="VideoPlayer_Progress_Container">
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
			<li v-if="props.showTime" class="VideoPlayer_Time">
				<span class="text-sm text_white text_bold">
					{{ currentTimeString }}&nbsp;/&nbsp;
				</span>
				<span class="text-sm text_white text_bold">
					{{ totalTimeString }}</span
				>
			</li>
			<li class="VideoPlayer_Fullscreen">
				<button class="VideoPlayer_ControlsButton" @click="toggle">
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
const props = defineProps({
	/* 
	Object containing a muxVideo. 
	*/
	video: {
		type: Object,
		required: true,
	},

	/* 
	Without a posterimage the first frame from the mux video is used.
	*/
	posterImage: {
		type: Object,
		default: () => undefined,
	},

	/* 
	Show the current and total time in the player bar.
	*/
	showTime: {
		type: Boolean,
		default: () => false,
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
})

/* 
elements 
*/
const videoPlayerEl = ref()
const videoEl = ref()
const progressEl = ref()

/* 
variables 
*/
const isInitial = ref(true)
const isLoaded = ref(true)
const isPlaying = ref(false)
const currentTime = ref(0)
const totalTime = ref(0)
const progressHoverPosition = ref(0)

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
const aspectRatioStyle = computed(() =>
	videoWidth && videoHeight
		? { 'aspect-ratio': `${videoWidth.value} / ${videoHeight.value}` }
		: {}
)

/*
poster image
*/
const { $urlFor } = useNuxtApp()
const posterSrc = computed(() => {
	if (props.posterImage) {
		return $urlFor(props.posterImage)
			.width(videoWidth.value ?? 1920)
			.url()
	} else {
		return props.video?.muxVideo?.asset?.playbackId
			? `https://image.mux.com/${
					props.video?.muxVideo?.asset?.playbackId
			  }/thumbnail.jpg?time=${
					props.video?.muxVideo?.asset?.thumbTime ?? 0
			  }`
			: ''
	}
})

/*
load video
*/
const { appendVideo } = useMuxStream({
	muxVideo: props.video?.muxVideo,
	videoEl: videoEl,
	preferMp4: props.preferMp4,
	useSmallResolution: props.useSmallResolution,
})
onMounted(() => {
	appendVideo()
})

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

const { isFullscreen, toggle } = useFullscreen(videoEl)

/*
control video states
*/
const handleCanPlay = () => {
	isLoaded.value = true
}

/*
video progress
*/

const currentTimeString = computed(() => {
	let minutes = Math.floor(currentTime.value / 60)
	minutes = minutes >= 10 ? minutes : `0${minutes}`
	let seconds = Math.floor(currentTime.value % 60)
	seconds = seconds >= 10 ? seconds : `0${seconds}`
	return `${minutes}:${seconds}`
})

const totalTimeString = computed(() => {
	let minutes = Math.floor(totalTime.value / 60)
	minutes = minutes >= 10 ? minutes : `0${minutes}`
	let seconds = Math.floor(totalTime.value % 60)
	seconds = seconds >= 10 ? seconds : `0${seconds}`
	return `${minutes}:${seconds}`
})

const progressHoverStyle = computed(
	() => `width: ${progressHoverPosition.value}%`
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
</script>

<style scoped>
.VideoPlayer {
	position: relative;
	width: 100%;
	height: auto;
	line-height: 0;
	overflow: hidden;
}

/*
video
*/

.VideoPlayer_Video {
	position: relative;
	width: 100%;
	height: auto;
}

.VideoPlayer_initial .VideoPlayer_Video {
	object-fit: cover;
	background: none;
}

.VideoPlayer:fullscreen,
.VideoPlayer:fullscreen .VideoPlayer_Video {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
	background: rgb(var(--clr-black));
}

/*
cover
*/

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
	width: 5rem;
	transition: transform 0.4s;
}

@media (hover: hover) and (pointer: fine) {
	.VideoPlayer_Cover:hover:deep(.PlayIcon) {
		transform: scale(1.2);
	}
}

/*
loop cover
*/

.VideoPlayer_PreviewLoop {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 2;
	opacity: 0;
}

.VideoPlayer_initial .VideoPlayer_PreviewLoop {
	opacity: 1;
}

/*
controls
*/

.VideoPlayer_Controls {
	position: absolute;
	display: flex;
	height: 30px;
	right: 0;
	left: 0;
	bottom: 0;
	padding: 0;
	margin: 0;
	z-index: 2;
	list-style: none;
	transition: opacity 0.2s 1s ease;
	background: linear-gradient(
		to bottom,
		hsla(0, 0%, 0%, 0) 0%,
		hsla(0, 0%, 0%, 0.003) 8.1%,
		hsla(0, 0%, 0%, 0.01) 15.5%,
		hsla(0, 0%, 0%, 0.021) 22.5%,
		hsla(0, 0%, 0%, 0.035) 29%,
		hsla(0, 0%, 0%, 0.052) 35.3%,
		hsla(0, 0%, 0%, 0.07) 41.2%,
		hsla(0, 0%, 0%, 0.09) 47.1%,
		hsla(0, 0%, 0%, 0.11) 52.9%,
		hsla(0, 0%, 0%, 0.13) 58.8%,
		hsla(0, 0%, 0%, 0.148) 64.7%,
		hsla(0, 0%, 0%, 0.165) 71%,
		hsla(0, 0%, 0%, 0.179) 77.5%,
		hsla(0, 0%, 0%, 0.19) 84.5%,
		hsla(0, 0%, 0%, 0.197) 91.9%,
		hsla(0, 0%, 0%, 0.2) 100%
	);

	@media (min-width: token(width.md)) {
		height: 50px;
	}
}

.VideoPlayer_playing .VideoPlayer_Controls {
	opacity: 0;
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

.VideoPlayer_ControlsButton {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: auto;
	padding: 0 10px;

	@media (min-width: token(width.md)) {
		width: auto;
		padding: 0 20px;
	}
}

.VideoPlayer_ControlsButton > span {
	display: inline-block;
	overflow: hidden;
	line-height: 0;
}

@media (hover: hover) and (pointer: fine) {
	.VideoPlayer_ControlsButton:hover {
		opacity: 0.5;
	}
}

/* progress */

.VideoPlayer_Progress {
	flex: 1 0 auto;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	height: 100%;
	cursor: pointer;
}

.VideoPlayer_Progress_Container {
	position: relative;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	width: 100%;
	height: 1px;
	border-radius: 10rem;
	overflow: hidden;
	backdrop-filter: blur(10px);
	background: rgb(var(--clr-white) / 0.2);
	transition: height 0.2s;
}

@media (hover: none) and (pointer: coarse) {
	.VideoPlayer_Progress_Container {
		height: 4px;
	}
}

progress {
	position: relative;
	-webkit-appearance: none;
	appearance: none;
	height: 8px;
	width: auto;
}

progress[value] {
	/* Reset the default appearance */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	background: rgb(var(--clr-white) / 0.2);
}

progress[value]::-webkit-progress-bar {
	background: rgb(var(--clr-white) / 0.2);
}

.VideoPlayer:fullscreen progress[value],
.VideoPlayer:fullscreen progress[value]::-webkit-progress-bar {
	background: rgb(var(--clr-white) / 0.2);
}

progress[value]::-webkit-progress-value {
	background: rgb(var(--clr-white));
}

progress[value]::-moz-progress-bar {
	background: rgb(var(--clr-white));
}

.VideoPlayer_Progress_Indicator {
	position: absolute;
	height: 100%;
	left: 0;
	top: 0;
	opacity: 0;
	background: rgb(var(--clr-white) / 0.3);
}

.VideoPlayer_Progress_Indicator::after {
	content: '';
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 1px;
	background: rgb(var(--clr-black) / 0.2);
}

@media (hover: hover) and (pointer: fine) {
	.VideoPlayer_Progress:hover .VideoPlayer_Progress_Indicator {
		opacity: 1;
	}

	.VideoPlayer_Progress:hover .VideoPlayer_Progress_Container {
		height: 8px;
	}
}

/* time */

.VideoPlayer_Time {
	display: flex;
	min-width: 8rem;
	justify-content: flex-end;
	align-items: center;
	padding: 0 0 0 0.5rem;

	@media (min-width: token(width.md)) {
		min-width: 9rem;
	}
}

.VideoPlayer_Time > span {
	text-align: right;
}
</style>
