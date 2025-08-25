<script setup>
import { ref } from 'vue';
import Day02 from './components/day02_20250825/Day02.vue';

const activeVueComp = ref('Day02');
const pages = { Day02 };
</script>

<template>
	<div>
		<button @click="activeVueComp = 'Day02'">Vue Directives</button>

		<div id="vue_comp">
			<component :is="pages[activeVueComp]"></component>
		</div>
	</div>
</template>

<style scoped>
button {
	margin: 5px;
	filter: drop-shadow(0 0 1.5px #112233);
}

#vue_comp {
	margin-top: 20px;
	padding: 10px;
	border: 1px solid orange;
	border-radius: 10px;
}
</style>
