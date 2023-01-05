<template>
	<svg
		class="PauseIcon"
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="1" width="3" height="10" />
		<rect x="6" width="3" height="10" />
	</svg>
</template>

<style scoped>
.PauseIcon {
	width: 10px;
	height: auto;

	@media (min-width: token(width.md)) {
		width: 15px;
	}
}

rect {
	fill: rgb(var(--clr-white));
}
</style>
