<template>
	<header class="TheHeader" v-on-click-outside="mainStore.closeMenu">
		<div class="TheHeader_Bar">
			<NuxtLink :to="{ name: 'index' }" class="text_bold"
				>{{ contentStore.siteOptions?.name }}
				{{ contentStore.siteOptions?.headerTitle }}</NuxtLink
			>
			<button @click="toggleMenu" class="TheHeader_NavButton">
				Menü
			</button>
		</div>
		<TheNavigation v-show="mainStore.menuIsOpen || isDesktop" />
	</header>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'
import { useMainStore } from '~/stores/MainStore'
import { vOnClickOutside } from '@vueuse/components'
import { useMediaQuery } from '@vueuse/core'

// get content
const contentStore = useContentStore()

/*
mobile menu
*/
const mainStore = useMainStore()

const toggleMenu = () => {
	mainStore.toggleMenu()
}
const isDesktop = useMediaQuery(
	`(min-width: ${mainStore.window.desktopWidth}px)`
)
</script>

<style scoped>
.TheHeader {
	position: fixed;
	width: 100%;
	top: 0;
	min-height: var(--header-height);
	background: rgb(var(--clr-white) / 0.5);
	backdrop-filter: blur(10px);
	z-index: 99;

	@media (--w-tablet-1) {
		position: sticky;
		display: flex;
	}
}

.TheHeader_Bar {
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 1rem;

	@media (--w-tablet-1) {
		display: flex;
		justify-content: space-between;
	}
}

.TheHeader_NavButton {
	@media (--w-tablet-1) {
		display: none;
	}
}
</style>
