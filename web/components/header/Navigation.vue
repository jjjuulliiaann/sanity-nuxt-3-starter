<template>
	<nav>
		<ul v-if="contentStore.siteNavigation" class="navigation">
			<li
				v-for="link in contentStore.siteNavigation?.navMain"
				:key="link.id"
				class="navigation__item"
			>
				<ElementsTextLink
					:link-type="link.linkType"
					:href="link.href"
					:blank="link.blank"
					:route="link.route"
					:slug="link.slug"
				>
					{{ link.title }}
				</ElementsTextLink>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// get content
const contentStore = useContentStore()
</script>

<style scoped>
.navigation {
	list-style: none;
	margin: 0 -1rem;

	@media (--w-tablet-1) {
		display: flex;
	}
}

.navigation__item {
	@media (--w-tablet-1) {
		padding: 0 0.5rem;
	}
}

@media (hover: hover) and (pointer: fine) {
	.navigation__item:deep(.link:hover) {
		color: rgb(var(--clr-accent));
	}
}
</style>
