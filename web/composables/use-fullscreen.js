import { useEventListener, defaultDocument } from '@vueuse/core'

export default function (targetPlayer, targetVideo) {
	const document = defaultDocument
	const isFullscreen = ref(false)
	const isSupported = ref(false)

	// check if supported
	onMounted(() => {
		const targetVideoEl = unref(targetVideo)
		isSupported.value = !!(
			document.fullscreenEnabled ||
			document.mozFullScreenEnabled ||
			document.msFullscreenEnabled ||
			document.webkitSupportsFullscreen ||
			document.webkitFullscreenEnabled ||
			targetVideoEl.webkitEnterFullscreen ||
			document.createElement('video').webkitRequestFullScreen
		)

		// event listener for leaving fullscreen on ios
		useEventListener(targetVideoEl, 'webkitendfullscreen', () => {
			isFullscreen.value = false
		})
	})

	// event listeners for leaving fullscreen
	const events = [
		'requestFullscreen',
		'exitFullscreen',
		'fullscreenElement',
		'fullscreenEnabled',
		'fullscreenchange',
		'fullscreenerror',
	]
	if (document) {
		events.forEach((event) => {
			useEventListener(document, event, (e) => {
				isFullscreen.value = !!(
					document.fullscreen ||
					document.webkitIsFullScreen ||
					document.mozFullScreen ||
					document.msFullscreenElement ||
					document.fullscreenElement
				)
			})
		})
	}

	async function exit() {
		if (!isSupported) return

		if (document.exitFullscreen) document.exitFullscreen()
		else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
		else if (document.webkitCancelFullScreen)
			document.webkitCancelFullScreen()
		else if (document.msExitFullscreen) document.msExitFullscreen()

		isFullscreen.value = false
	}

	async function enter() {
		if (!isSupported) return

		const targetPlayerEl = unref(targetPlayer)
		const targetVideoEl = unref(targetVideo)
		if (targetPlayerEl) {
			if (targetPlayerEl.requestFullscreen)
				targetPlayerEl.requestFullscreen()
			else if (targetPlayerEl.mozRequestFullScreen)
				targetPlayerEl.mozRequestFullScreen()
			else if (targetPlayerEl.webkitRequestFullScreen)
				targetPlayerEl.webkitRequestFullScreen()
			else if (targetPlayerEl.msRequestFullscreen)
				targetPlayerEl.msRequestFullscreen()
			else if (targetVideoEl.webkitEnterFullscreen) {
				targetVideoEl.webkitEnterFullscreen()
			}
			isFullscreen.value = true
		}
	}

	async function toggle() {
		if (isFullscreen.value) await exit()
		else await enter()
	}

	return {
		isSupported,
		isFullscreen,
		enter,
		exit,
		toggle,
	}
}
