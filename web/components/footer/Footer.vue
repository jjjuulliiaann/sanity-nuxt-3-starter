<template>
	<footer>
		<p class="text-sm">
			{{ contentStore.siteOptions?.copyrightText }}, {{ currentYear }}
		</p>
	</footer>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// content
const contentStore = useContentStore()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
footer {
	position: relative;
	padding: 5rem 1rem 1rem;
}
</style>
