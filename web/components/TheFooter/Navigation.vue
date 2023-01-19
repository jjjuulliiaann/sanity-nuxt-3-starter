<template>
	<nav class="Navigation">
		<ul v-if="mainStore.siteNav?.navFooter" class="Navigation_List">
			<li
				v-for="link in mainStore.siteNav?.navFooter"
				:key="link.id"
				class="Navigation_Item text_bold"
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
const mainStore = useMainStore()
</script>

<style scoped>
.Navigation {
	position: relative;
}

.Navigation_List {
	position: relative;
	display: flex;
	gap: 2rem;
	list-style: none;
}
</style>
