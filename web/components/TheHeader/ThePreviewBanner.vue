<template>
	<aside class="ThePreviewBanner">
		<button class="ThePreviewBanner_Button" @click="refreshData">
			Refresh preview page
		</button>
		<a
			class="ThePreviewBanner_Button"
			:href="`${route.path}?preview=true`"
			target="_blank"
			rel="noopener"
		>
			Open preview in new tab
		</a>
	</aside>
</template>

<script setup>
const route = useRoute()

const refreshData = () => {
	refreshNuxtData()
}
</script>

<style scoped>
.ThePreviewBanner {
	--_rgb-grey: rgb(86 89 92);
	--_rgb-lightgrey: rgba(86 89 92 / 0.4);
	--_rgb-blue: rgb(34 118 252);
	position: sticky;
	display: flex;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--ThePreviewBanner-height);
	padding: 0 12px;
	background: var(--rgb-white);
	color: var(--rgb-black);
	border-bottom: 1px solid var(--_rgb-lightgrey);
	z-index: 1000;
}

.ThePreviewBanner .ThePreviewBanner_Button {
	padding: 1px 7px;
	margin-right: 10px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	font-weight: 500;
	font-size: 13px;
	line-height: 1;
	text-align: left;
	color: var(--_rgb-grey);
	border-radius: 3px;
	border: 1px solid var(--_rgb-lightgrey);
	transition: none;
}

@media (hover: hover) and (pointer: fine) {
	.ThePreviewBanner .ThePreviewBanner_Button:hover {
		background: var(--_rgb-blue);
		color: var(--rgb-white);
		border-color: var(--_rgb-blue);
	}
}
</style>
