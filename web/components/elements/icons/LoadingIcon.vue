<template>
	<svg
		class="loading-icon"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M13 8C13 6.61929 12.4404 5.36929 11.5355 4.46447L12.5 3.5L13.6569 2.34315C15.1046 3.79086 16 5.79086 16 8C16 12.4183 12.4183 16 8 16V13C10.7614 13 13 10.7614 13 8ZM4.46447 11.5355C3.55964 10.6307 3 9.38071 3 8C3 5.23858 5.23858 3 8 3V0C3.58172 0 0 3.58172 0 8C0 10.2091 0.895431 12.2091 2.34315 13.6569L4 12L4.46447 11.5355Z"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		isFullscreen: {
			type: Boolean,
			default: () => false,
		},
	},
}
</script>

<style scoped>
.loading-icon {
	position: relative;
	width: 10px;
	animation: spinning 1s linear infinite;

	@media (--width-tablet-01) {
		width: 16px;
	}
}

path {
	fill: rgb(var(--clr-white));
}

@keyframes spinning {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
}
</style>
