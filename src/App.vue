<script setup>
import { ref } from 'vue';
import Day02 from './components/day02_20250825/Day02.vue';
import Day03 from './components/day03_20250826/Day03.vue';

const activeVueComp = ref('Day02');
const pages = { Day02, Day03 };
</script>

<template>
	<div>
		<button @click="activeVueComp = 'Day02'">Directives</button>
		<button @click="activeVueComp = 'Day03'">Events</button>

		<div id="vue_comp">
			<KeepAlive>
				<component :is="pages[activeVueComp]"></component>
			</KeepAlive>
		</div>
	</div>
</template>

<style scoped>
button {
	margin: 5px;
	filter: drop-shadow(0 0 1.5px #112233);
}

button:not(:last-child) {
	margin-right: 10px;
}

#vue_comp {
	margin-top: 20px;
	padding: 10px;
	border: 1px solid orange;
	border-radius: 10px;
}
</style>
