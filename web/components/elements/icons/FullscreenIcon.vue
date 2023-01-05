<template>
	<svg
		class="FullscreenIcon"
		:class="{ FullscreenIcon_full: props.isFullscreen }"
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path class="FullscreenIcon_Open" d="M4 0H0V4H1.5V1.5H4V0Z" />
		<path class="FullscreenIcon_Open" d="M6 0V1.5H8.5V4H10V0H6Z" />
		<path class="FullscreenIcon_Open" d="M10 6H8.5V8.5H6V10H10V6Z" />
		<path class="FullscreenIcon_Open" d="M1.5 6H0V10H4V8.5H1.5V6Z" />
		<path
			class="FullscreenIcon_Close"
			d="M0 3.99998L4 3.99998L4 -1.51714e-05L2.5 -1.52588e-05V2.5H8.74224e-08L0 3.99998Z"
		/>
		<path
			class="FullscreenIcon_Close"
			d="M10 3.99998V2.5H7.5V-1.52588e-05L6 -1.51714e-05L6 3.99998L10 3.99998Z"
		/>
		<path
			class="FullscreenIcon_Close"
			d="M6 9.99996H7.5V7.5H10V5.99996L6 5.99996L6 9.99996Z"
		/>
		<path
			class="FullscreenIcon_Close"
			d="M2.5 9.99996H4L4 5.99996L8.74224e-08 5.99996L0 7.5H2.5V9.99996Z"
		/>
	</svg>
</template>

<script setup>
const props = defineProps({
	isFullscreen: {
		type: Boolean,
		default: () => false,
	},
})
</script>

<style scoped>
.FullscreenIcon {
	width: 10px;
	height: auto;

	@media (min-width: token(width.md)) {
		width: 15px;
	}
}

path {
	fill: rgb(var(--clr-white));
}

.FullscreenIcon_Close {
	display: none;
}

.FullscreenIcon_full .FullscreenIcon_Close {
	display: block;
}

.FullscreenIcon_full .FullscreenIcon_Open {
	display: none;
}
</style>
