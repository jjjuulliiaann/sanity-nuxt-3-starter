<template>
	<section class="TheCounter">
		<div
			class="TheCounter_Number"
			:class="{ TheCounter_Number_empty: mainStore.counterIsZero }"
			v-motion
			v-motion-pop-up
		>
			<span class="text-xl text_bold">{{ mainStore.counter }}</span>
		</div>

		<div class="TheCounter_Buttons" v-motion v-motion-pop-up>
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
.TheCounter {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 8rem 1rem;
}

.TheCounter_Number {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 16rem;
	height: 6rem;
	border-radius: 0.5rem;
	background: var(--rgb-accent);
}

.TheCounter_Number_empty span {
	color: var(--rgb-white);
}

.TheCounter_Buttons {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
}

button {
	padding: 0.5rem 0.75rem;
	margin-top: 1rem;
	border-radius: 0.5rem;
	background: var(--rgb-accent);
	color: var(--rgb-white);
}
</style>
