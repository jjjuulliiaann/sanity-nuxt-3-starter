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
						<h2 class="text--bold text--white">
							{{ project.title }}
						</h2>
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
		grid-template-columns: 1fr 1fr 1fr;
	}
}

.projects__item {
	background: rgb(var(--clr-accent));
	border-radius: 0.2rem;
	box-shadow: 5px 5px 14px 5px rgba(0, 0, 0, 0);
	transition: box-shadow 0.5s ease;
}

.projects__item:deep(.link) {
	position: relative;
	display: block;
	padding: 1rem;
	min-height: 20vh;
}

@media (hover: hover) and (pointer: fine) {
	.projects__item:hover {
		box-shadow: 0px 5px 14px 5px rgba(0, 0, 0, 0.2);
	}
}
</style>
