<template>
	<main class="Home">
		<section v-if="data" class="Home_Projects">
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
							use-hotspot
						/>
						<span class="Home_Head text-lg">
							{{ project.title }}
						</span>
						<span class="text-base text_bold">
							{{ project.subtitle }}
						</span>
					</ElementsTextLink>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
import { homeQuery } from '@/queries/contentQueries'

// get data
const mainStore = useMainStore()
const data = await useSanityData({
	query: homeQuery,
})

// meta
usePageHead({
	title: '',
})
</script>

<style scoped>
.Home_Projects > ul {
	display: grid;
	gap: 6rem;

	@media (min-width: token(width.md)) {
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 10rem 1rem;
	}
}

.Home_Item {
	position: relative;
	width: 100%;

	@media (min-width: token(width.md)) {
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

.Home_Image:deep(picture),
.Home_Image:deep(img) {
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
