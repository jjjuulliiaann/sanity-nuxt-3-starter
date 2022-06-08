<template>
	<section class="Counter">
		<div
			class="CounterNumber"
			:class="{ CounterNumber_empty: mainStore.counterIsZero }"
			v-motion
			v-motion-pop-up
		>
			<span class="text-xl text_bold">{{ mainStore.counter }}</span>
		</div>

		<div class="CounterButtons" v-motion v-motion-pop-up>
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
.Counter {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 8rem 1rem;
}

.CounterNumber {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 14rem;
	height: 6rem;
	border-radius: 0.5rem;
	background: rgb(var(--clr-accent));
}

.CounterNumber_empty span {
	color: rgb(var(--clr-white));
}

.CounterButtons {
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
