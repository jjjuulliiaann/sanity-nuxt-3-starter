<template>
	<aside v-if="mainStore.preview.isActive" class="ThePreviewHeader">
		<button class="ThePreviewHeader_Button" @click="refreshPreview">
			Refresh preview
		</button>
		<a
			v-if="!mainStore.preview.isFullscreen"
			class="ThePreviewHeader_Button"
			:href="`${route.path}?preview=true&fullscreen=true`"
			target="_blank"
			rel="noopener"
		>
			Open preview in new tab
		</a>
	</aside>
</template>

<script setup>
import { onBeforeMount } from '@vue/runtime-core'
import { useMainStore } from '~/stores/MainStore'

const route = useRoute()
const mainStore = useMainStore()

const refreshPreview = () => {
	mainStore.refreshPreview()
}

onBeforeMount(() => {
	if (route.query.preview) {
		mainStore.preview.isActive = true
	}
	if (route.query.fullscreen) {
		mainStore.preview.isFullscreen = true
	}
})
</script>

<style scoped>
.ThePreviewHeader {
	--_rgb-grey: rgb(86 89 92);
	--_rgb-lightgrey: rgba(190 198 211);
	--_rgb-blue: rgb(34 118 252);
	--_bannerHeight: 42px;
	position: sticky;
	display: flex;
	align-items: center;
	overflow: hidden;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--_bannerHeight);
	padding: 0 12px;
	background: white;
	color: var(--rgb-black);
	border-bottom: 1px solid var(--_rgb-lightgrey);
	z-index: 1000;
	line-height: 0;
}

.ThePreviewHeader .ThePreviewHeader_Button {
	padding: 3px 7px;
	margin-right: 10px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		sans-serif;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	letter-spacing: 0;
	text-align: left;
	color: var(--_rgb-grey);
	border-radius: 3px;
	border: 1px solid var(--_rgb-lightgrey);
	transition: none;
	white-space: nowrap;
}

@media (hover: hover) and (pointer: fine) {
	.ThePreviewHeader .ThePreviewHeader_Button:hover {
		background: var(--_rgb-blue);
		color: white;
		border-color: var(--_rgb-blue);
	}
}
</style>
