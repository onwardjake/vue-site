<template>
	<div id="wrapper">
		<p>Vue 2일차 교육 내용</p>
		<button @click="activeComp = 'Ex01'">bind</button>
		<button @click="activeComp = 'Ex02'">if</button>
		<button @click="activeComp = 'Ex03'">show</button>
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

import Ex01 from './Ex01.vue';
import Ex02 from './Ex02.vue';
import Ex03 from './Ex03.vue';

const pages = { Ex01, Ex02, Ex03 };
const activeComp = ref('Ex01');
</script>

<style scoped>
#wrapper {
	height: 100%;
}

button:not(:last-child) {
	margin-right: 10px;
}

#comp_view {
	padding: 10px;
}
</style>
