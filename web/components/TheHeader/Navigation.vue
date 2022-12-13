<template>
	<nav class="Navigation text-lg">
		<ul v-if="mainStore.siteNav?.navMain" class="Navigation_List">
			<li
				v-for="link in mainStore.siteNav?.navMain"
				:key="link.id"
				class="Navigation_Item text-lg"
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
import { useMainStore } from '~/stores/MainStore'

const mainStore = useMainStore()
</script>

<style scoped>
.Navigation {
	position: absolute;
	width: 100%;
	bottom: 1rem;
	transform: translateY(100%);
	padding: 0.1rem 1rem 1rem;

	@media (--w-tablet-1) {
		padding: 0.3rem 1rem 1rem;
	}
}

.Navigation_List {
	position: relative;
	list-style: none;
}

.Navigation_Item {
	padding: 0.1rem 0;
	text-align: right;

	@media (--w-tablet-1) {
		padding: 0.3rem 0;
	}
}
</style>
