<template>
	<svg
		class="PlayIcon"
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M1 0L9 5L1 10V0Z" />
	</svg>
</template>

<style scoped>
.PlayIcon {
	width: 10px;
	height: auto;

	@media (min-width: token(width.md)) {
		width: 15px;
	}
}

path {
	fill: rgb(var(--clr-white));
}
</style>
