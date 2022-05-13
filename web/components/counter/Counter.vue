<template>
	<section class="Counter">
		<Motion
			v-show="isVisible"
			class="CounterNumber"
			:initial="{ opacity: 0, scale: 0 }"
			:animate="{ opacity: 1, scale: 1 }"
			:transition="{
				delay: 0.5,
				easing: spring({ stiffness: 300, damping: 20 }),
				opacity: { duration: 0.1 },
			}"
			:class="{ CounterNumber_empty: mainStore.counterIsZero }"
		>
			<span class="text-xl text_bold">{{ mainStore.counter }}</span>
		</Motion>

		<Motion
			v-show="isVisible"
			:initial="{ opacity: 0, scale: 0 }"
			:animate="{ opacity: 1, scale: 1 }"
			:transition="{
				delay: 1,
				easing: spring({ stiffness: 300, damping: 20 }),
				opacity: { duration: 0.1 },
			}"
			class="CounterButtons"
		>
			<button @click="increase">Add 1</button>
			<button @click="randomize">Randomize</button>
			<button @click="mainStore.resetCounter">Reset</button>
		</Motion>
	</section>
</template>

<script setup>
import { useMainStore } from '~/stores/MainStore'
import { spring } from 'motion'
import { Motion } from 'motion/vue'

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

/* motion */
const isVisible = ref(false)
onMounted(() => {
	isVisible.value = true
})
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
