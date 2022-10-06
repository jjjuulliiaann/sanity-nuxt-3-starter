<template>
	<nav class="TheNavigation">
		<ul v-if="contentStore.siteNavigation" class="TheNavigation_List">
			<li
				v-for="link in contentStore.siteNavigation?.navMain"
				:key="link.id"
				class="TheNavigation_Item text-sm"
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
.TheNavigation {
	position: relative;
	width: 100%;
	padding: 0 1rem 1rem;

	@media (--w-tablet-1) {
		width: auto;
		padding: 1rem;
	}
}

.TheNavigation_List {
	position: relative;
	list-style: none;

	@media (--w-tablet-1) {
		display: flex;
		margin: 0 -0.5rem;
	}
}

.TheNavigation_Item {
	padding: 0.1rem 0;

	@media (--w-tablet-1) {
		padding: 0 0.5rem;
	}
}

@media (hover: hover) and (pointer: fine) {
	.TheNavigation_Item:deep(.link:hover) {
		color: rgb(var(--clr-accent));
	}
}
</style>
