<template>
	<footer class="TheFooter">
		<p class="text-sm">
			{{ mainStore.siteOptions?.copyrightText }}, {{ currentYear }}
		</p>
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
	padding: 10rem 1rem 1rem;
}
</style>
