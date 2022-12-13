<template>
	<footer class="TheFooter">
		<p class="text_bold">
			{{ mainStore.siteOptions?.copyrightText }}, {{ currentYear }}
		</p>
		<TheFooterNavigation />
	</footer>
</template>

<script setup>
import { useMainStore } from '~/stores/MainStore'

// content
const mainStore = useMainStore()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.TheFooter {
	position: relative;
	display: grid;
	gap: 1rem;
	width: 100%;
	padding: 10rem 1rem 1rem;

	@media (--w-mobile-3) {
		display: flex;
		gap: 4rem;
	}
}
</style>
