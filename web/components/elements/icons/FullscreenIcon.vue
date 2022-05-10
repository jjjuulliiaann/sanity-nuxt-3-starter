<template>
	<svg
		class="FullscreenIcon"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			v-show="!isFullscreen"
			class="FullscreenIcon_max"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6 0H0V6H3V3H6V0ZM10 0V3H13V6H16V0H10ZM6 13H3V10H0V16H6V13ZM10 16H16V10H13V13H10V16Z"
		/>
		<path
			v-show="isFullscreen"
			class="FullscreenIcon_min"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4 0H7V7H0V4H4V0ZM0 9V12H4V16H7V9H0ZM9 9V16H12V12H16V9H9ZM16 7V4H12V0H9V7H16Z"
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
	width: 12px;
}

path {
	fill: rgb(var(--clr-white));
}
</style>
