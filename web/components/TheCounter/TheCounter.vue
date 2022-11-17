<template>
	<section class="TheCounter">
		<div
			class="TheCounter_Number"
			:class="{ TheCounter_Number_empty: mainStore.counterIsZero }"
		>
			<span class="text-xl text_bold">{{ mainStore.counter }}</span>
		</div>

		<div class="TheCounter_Buttons">
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
	mainStore.increaseCounter()
}

const randomize = () => {
	mainStore.randomizeCounter()
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
	width: 18rem;
	height: 8rem;
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
