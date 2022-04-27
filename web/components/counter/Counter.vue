<template>
	<section class="counter">
		<div
			class="counter__number"
			:class="{ 'counter__number--empty': mainStore.counterIsZero }"
		>
			<span class="text-xl text--bold">{{ mainStore.counter }}</span>
		</div>

		<div class="buttons">
			<button @click="increase">Add 1</button>
			<button @click="randomize">Randomize</button>
			<button @click="mainStore.resetCounter">Reset</button>
		</div>
	</section>
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
</script>

<style scoped>
.counter {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

.counter__number {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 12rem;
	height: 6rem;
	border-radius: 0.5rem;
	background: rgb(var(--clr-accent));
}

.counter__number--empty span {
	color: rgb(var(--clr-white));
}

.buttons {
	width: 12rem;
	display: flex;
	justify-content: space-between;
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
