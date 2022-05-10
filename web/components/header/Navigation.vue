<template>
	<nav>
		<ul v-if="contentStore.siteNavigation" class="NavigationList">
			<li
				v-for="link in contentStore.siteNavigation?.navMain"
				:key="link.id"
				class="NavigationItem"
			>
				<ElementsTextLink
					:link-type="link.linkType"
					:href="link.href"
					:blank="link.blank"
					:route="link.route"
					:slug="link.slug"
					@click="mainStore.closeMenu"
				>
					{{ link.title }}
				</ElementsTextLink>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'
import { useMainStore } from '~/stores/MainStore'

// stores
const contentStore = useContentStore()
const mainStore = useMainStore()
</script>

<style scoped>
nav {
	position: relative;
	width: 100%;
	padding: 0 1rem 1rem;

	@media (--w-tablet-1) {
		width: auto;
		padding: 1rem;
	}
}
.NavigationList {
	position: relative;
	list-style: none;

	@media (--w-tablet-1) {
		display: flex;
		margin: 0 -0.5rem;
	}
}

.NavigationItem {
	padding: 0.1rem 0;

	@media (--w-tablet-1) {
		padding: 0 0.5rem;
	}
}

@media (hover: hover) and (pointer: fine) {
	.NavigationItem:deep(.link:hover) {
		color: rgb(var(--clr-accent));
	}
}
</style>
