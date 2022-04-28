<template>
	<header>
		<div class="header__bar">
			<NuxtLink :to="{ name: 'index' }" class="text--bold"
				>{{ contentStore.siteOptions?.name }}
				{{ contentStore.siteOptions?.headerTitle }}</NuxtLink
			>
			<HeaderNavigation />
		</div>
	</header>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// get content
const contentStore = useContentStore()
</script>

<style scoped>
header {
	position: sticky;
	top: 0;

	background: rgb(var(--clr-white));
	border-bottom: 1px solid rgb(var(--clr-black) / 0.15);
	z-index: 999;

	@media (--w-tablet-1) {
		min-height: var(--header-height);
	}
}

.header__bar {
	position: relative;
	width: 100%;
	padding: 1rem;

	@media (--w-tablet-1) {
		display: flex;
		justify-content: space-between;
	}
}
</style>
