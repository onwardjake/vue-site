<template>
	<div id="wrapper">
		<p>Vue 4일차 교육 내용</p>
		<button @click="activeComp = 'Methods'">Methods</button>
		<button @click="activeComp = 'Models'">Models</button>
		<button @click="activeComp = 'Computed'">Computed</button>
		<button @click="activeComp = 'Watchers'">Watchers</button>
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
import Methods from './Methods.vue';
import Models from './Models.vue';
import Computed from './Computed.vue';
import Watchers from './Watchers.vue';

const pages = { Methods, Models, Computed, Watchers };
const activeComp = ref('Methods');
</script>

<style scoped>
button:not(:last-child) {
	margin-right: 10px;
}
</style>
