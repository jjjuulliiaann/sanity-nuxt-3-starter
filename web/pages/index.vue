<template>
	<main class="Home">
		<section class="Home_Projects">
			<ul>
				<li
					v-for="project in data.projects"
					:key="project._id"
					class="Home_Item"
				>
					<ElementsTextLink
						v-if="project?._id"
						link-type="internalLink"
						route="projects-slug"
						:slug="project.slug.current"
					>
						<ElementsMediaBaseFigure
							:image="project.titleImage"
							class="Home_Image imagelink"
						/>
						<h2 class="text-lg">
							{{ project.title }}
						</h2>
						<span class="text-base text_bold">
							{{ mainStore.siteOptions.locationPrefix
							}}{{ project.location }}
						</span>
					</ElementsTextLink>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
import { useMainStore } from '~/stores/MainStore'
import { homeQuery } from '@/queries/contentQueries'

// get data
const mainStore = useMainStore()
const { data } = useSanityQuery(homeQuery)

// preview handling
usePreviewHandler({ query: homeQuery, data })

// meta
usePageHead({
	title: '',
})
</script>

<style scoped>
.Home_Projects > ul {
	display: grid;
	gap: 6rem;

	@media (--w-tablet-1) {
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 10rem 1rem;
	}
}

.Home_Item {
	position: relative;
	width: 100%;

	@media (--w-tablet-1) {
		grid-column: 1 / -3;
	}
}

.Home_Item > a {
	width: 100%;
}

.Home_Item span {
	display: block;
	margin-top: 0.5rem;
}

.Home_Image {
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 9;
}

.Home_Image:deep(img) {
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
