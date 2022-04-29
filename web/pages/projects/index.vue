<template>
	<main class="projects">
		<h1 class="text-lg text--bold">
			{{ contentStore.pageProjects.title }}
		</h1>

		<section class="projects__grid">
			<ul>
				<li
					v-for="project in contentStore.pageProjects.projects"
					:key="project.id"
					class="projects__item"
				>
					<ElementsTextLink
						link-type="internal"
						route="projects-slug"
						:slug="project.slug.current"
					>
						<h2 class="text-base text--bold text--white">
							{{ project.title }}
						</h2>
						<ElementsMediaBaseImage
							:image="project.firstImage"
							class="projects__item__image"
						/>
					</ElementsTextLink>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// get data
const contentStore = useContentStore()
contentStore.fetchProjects()
</script>

<style scoped>
main {
	padding: 1rem;
}

.projects__grid {
	padding: 1rem 0;
}

.projects__grid ul {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;

	@media (--w-tablet-1) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

.projects__item {
	position: relative;
	border-radius: 0.2rem;
	box-shadow: 5px 5px 14px 5px rgba(0, 0, 0, 0);
	background: rgb(var(--clr-black));
	transition: box-shadow 0.5s ease;
	overflow: hidden;
}

.projects__item:deep(.link) {
	position: relative;
	display: block;
	min-height: 20vh;
	line-height: 0;
}

h2 {
	position: absolute;
	padding: 1rem;
	z-index: 2;
}

.projects__item__image {
	position: relative;
	width: 100%;
	height: auto;
	opacity: 0.8;
	transition: opacity 0.5s ease;
}

@media (hover: hover) and (pointer: fine) {
	.projects__item:hover {
		box-shadow: 0px 5px 14px 5px rgba(0, 0, 0, 0.25);
	}

	.projects__item:hover .projects__item__image {
		opacity: 1;
	}
}
</style>
