import Hls from 'hls.js'

export default function ({ muxVideo, videoEl, preferMp4 = false }) {
	const video = unref(muxVideo)
	if (!video?.asset) {
		return false
	}

	let stream = ''

	const addStreamToVideo = () => {
		if (
			preferMp4 &&
			video.asset.data?.static_renditions?.status === 'ready'
		) {
			// create mp4 version
			const filesSortedByBitrate = [
				...video.asset.data?.static_renditions?.files,
			].sort((a, b) => b.bitrate - a.bitrate)
			const highVersionString = filesSortedByBitrate[0]?.name
			stream = `https://stream.mux.com/${video.asset?.playbackId}/${highVersionString}`
			videoEl.value.src = stream
		} else {
			// create hls version
			stream = `https://stream.mux.com/${video.asset?.playbackId}.m3u8`
			if (Hls.isSupported()) {
				const hls = new Hls()
				hls.loadSource(stream)
				hls.attachMedia(videoEl.value)
			} else if (
				videoEl.value.canPlayType('application/vnd.apple.mpegurl')
			) {
				videoEl.value.src = stream
			}
		}
	}

	onMounted(() => {
		addStreamToVideo()
	})
}
