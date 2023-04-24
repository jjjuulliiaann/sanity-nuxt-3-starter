<template>
	<main v-if="data" class="Projects">
		<h1 class="hidden-item">
			{{ data.title }}
		</h1>

		<section class="Projects_Grid">
			<ul>
				<li
					v-for="project in data.projects"
					:key="project.id"
					class="Projects_Item"
				>
					<ElementsTextLink
						link-type="internalLink"
						route="projects-slug"
						:slug="project.slug.current"
					>
						<ElementsMediaBaseFigure
							:image="project.titleImage"
							class="Projects_ItemImage imagelink"
						/>
						<span class="text-base text_bold">
							{{ project.title }}<br />{{ project.subtitle }}
						</span>
					</ElementsTextLink>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
import { projectsQuery } from '@/queries/contentQueries'

// get data
const { data } = await useSanityQuery(projectsQuery)

// meta
usePageHead({
	title: data.value?.title,
	seo: data.value?.seo,
})
</script>

<style scoped>
.Projects_Grid {
	padding: 0;
}

.Projects_Grid ul {
	display: grid;
	grid-template-columns: 1fr;
	gap: 6rem;

	@media (min-width: token(width.md)) {
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: 10rem 1rem;
	}
}

.Projects_Item {
	position: relative;
	transition: box-shadow 0.5s ease;
	overflow: hidden;
}

.Projects_Item:deep(.link) {
	position: relative;
	display: block;
	line-height: 0;
}

.Projects_Item span {
	position: relative;
	display: block;
	padding: 0.5rem 0;
}

.Projects_ItemImage {
	width: 100%;
	height: 80rem;
}

.Projects_ItemImage,
.Projects_ItemImage:deep(picture),
.Projects_ItemImage:deep(img) {
	position: relative;
	width: 100%;
	height: auto;
}
</style>
