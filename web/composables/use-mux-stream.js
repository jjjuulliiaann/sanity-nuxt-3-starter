import Hls from 'hls.js'

export default function (playbackId, video) {
	const playbackIdString = unref(playbackId)
	if (!playbackIdString) {
		return false
	}

	const stream = `https://stream.mux.com/${playbackIdString}.m3u8`

	const addStreamToVideo = () => {
		if (Hls.isSupported()) {
			const hls = new Hls()
			hls.loadSource(stream)
			hls.attachMedia(video.value)
		} else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
			video.value.src = stream
		}
	}

	onMounted(() => {
		addStreamToVideo()
	})
}
