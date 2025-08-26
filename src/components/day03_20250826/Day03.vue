<template>
	<div id="wrapper">
		<p>Vue 3일차 교육 내용</p>
		<button @click="activeComp = 'Ex04'">for</button>
		<button @click="activeComp = 'Events'">Events</button>
		<hr />
		<div id="comp_view">
			<KeepAlive>
				<component :is="pages[activeComp]"></component>
			</KeepAlive>
		</div>
	</div>
</template>

<script setup>
import { KeepAlive, ref } from 'vue';
import Events from './Events.vue';
import Ex04 from './Ex04.vue';

const pages = { Ex04, Events };
const activeComp = ref('Ex04');
</script>

<style scoped>
button:not(:last-child) {
	margin-right: 10px;
}
</style>
