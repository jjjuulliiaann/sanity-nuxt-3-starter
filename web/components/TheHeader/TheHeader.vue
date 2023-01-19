<template>
	<header class="TheHeader" v-on-click-outside="mainStore.closeMenu">
		<div class="TheHeader_Bar">
			<NuxtLink :to="{ name: 'index' }" class="text-lg">{{
				mainStore.siteOptions?.name
			}}</NuxtLink>
			<button
				@click="toggleMenu"
				class="TheHeader_NavButton textlink text-lg"
			>
				Menu
			</button>
		</div>
		<transition name="fade">
			<TheHeaderNavigation v-show="mainStore.menuIsOpen" />
		</transition>
	</header>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'

// get content
const mainStore = useMainStore()

/*
mobile menu
*/
const toggleMenu = () => {
	mainStore.toggleMenu()
}
</script>

<style scoped>
.TheHeader {
	position: sticky;
	width: 100%;
	top: 0;
	mix-blend-mode: difference;
	z-index: 10;
	min-height: var(--header-height);
}

.TheHeader_Bar {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	padding: 1rem;

	@media (min-width: token(width.md)) {
		display: flex;
		justify-content: space-between;
	}
}
</style>
