<template>
	<svg
		class="LoadingIcon"
		width="10"
		height="10"
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5H8.5C8.5 6.933 6.933 8.5 5 8.5C3.067 8.5 1.5 6.933 1.5 5C1.5 3.067 3.067 1.5 5 1.5V0Z"
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
.LoadingIcon {
	position: relative;
	width: 10px;
	height: auto;
	animation: spinning 1s linear infinite;

	@media (min-width: token(width.md)) {
		width: 15px;
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
