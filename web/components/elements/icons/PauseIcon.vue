<template>
	<svg
		class="PauseIcon"
		width="16px"
		height="18px"
		viewBox="0 0 16 18"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<rect x="0" y="0" width="5" height="18" rx="2"></rect>
			<rect x="11" y="0" width="5" height="18" rx="2"></rect>
		</g>
	</svg>
</template>

<style scoped>
.PauseIcon {
	height: 1.4rem;
	width: auto;

	@media (--media-min-tablet) {
		height: 1.8rem;
	}
}

rect {
	fill: rgb(var(--clr-white));
}
</style>
