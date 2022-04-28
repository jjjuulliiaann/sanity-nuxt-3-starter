<template>
	<header>
		<div class="header__bar">
			<NuxtLink :to="{ name: 'index' }"
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
	height: var(--header-height);
	background: rgb(var(--clr-white));
	border-bottom: 1px solid rgb(var(--clr-black) / 0.1);
	z-index: 999;
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
