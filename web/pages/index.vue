<template>
	<main>
		<p
			class="counter"
			:class="{ 'counter--empty': mainStore.counterIsZero }"
		>
			{{ mainStore.counter }}
		</p>

		<ElementsTheTest />

		<h1 class="text-lg text--bold">{{ data.title }}</h1>

		<p class="text-sm">Some text in font size sm</p>
		<p class="text-base">Some text in font size base</p>

		<div class="buttons">
			<button @click="increase">Add 1</button>
			<button @click="randomize">Randomize</button>
			<button @click="mainStore.resetCounter">Reset</button>
		</div>
	</main>
</template>

<script setup>
import { useMainStore } from '~/stores/MainStore'

const mainStore = useMainStore()

const increase = () => {
	console.log('increase!')
	mainStore.increaseCounter()
	console.log(mainStore.counter)
}

const randomize = () => {
	console.log('randomize!')
	mainStore.randomizeCounter()
	console.log(mainStore.counter)
}

const query = groq`*[_type == 'templateHome'][0]{
  ...
}`
const { data } = useSanityQuery(query)
console.log(data.value)
</script>

<style scoped>
main {
	min-height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

.counter {
	position: relative;
	padding: 1rem;
	font-size: 200%;
}

h1 {
	padding: 2rem 0;
}

.counter--empty {
	color: rgb(60 60 60);
}

.buttons {
	display: flex;
	gap: 0.5rem;
}

button {
	padding: 0.5rem;
	margin-top: 1rem;
	border-radius: 0.2rem;
	background: rgb(var(--clr-accent));
	color: rgb(var(--clr-white));
}
</style>
