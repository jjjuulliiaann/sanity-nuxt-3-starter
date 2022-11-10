<template>
	<main class="Projects">
		<h1 class="text-lg text_bold">
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
						<h2 class="text-base text_bold text_white">
							{{ project.title }}
						</h2>
						<ElementsMediaBaseImage
							:image="project.firstImage"
							class="Projects_ItemImage"
						/>
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

// preview handling
usePreviewHandler({ query: projectsQuery, data })

// meta
useDefaultHead({
	title: data.value?.title,
	seo: data.value?.seo,
})
</script>

<style scoped>
main {
	padding: 1rem;
}

.Projects_Grid {
	padding: 1rem 0;
}

.Projects_Grid ul {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;

	@media (--w-tablet-1) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

.Projects_Item {
	position: relative;
	border-radius: 0.2rem;
	box-shadow: 5px 5px 14px 5px rgba(0, 0, 0, 0);
	background: var(--rgb-black);
	transition: box-shadow 0.5s ease;
	overflow: hidden;
}

.Projects_Item:deep(.link) {
	position: relative;
	display: block;
	line-height: 0;
}

h2 {
	position: absolute;
	padding: 1rem;
	z-index: 2;
}

.Projects_ItemImage {
	position: relative;
	width: 100%;
	height: auto;
	opacity: 0.8;
	transition: opacity 0.5s ease;
}

@media (hover: hover) and (pointer: fine) {
	.Projects_Item:hover {
		box-shadow: 0px 5px 14px 5px rgba(0, 0, 0, 0.25);
	}

	.Projects_Item:hover .Projects_ItemImage {
		opacity: 1;
	}
}
</style>
