<template>
	<div id="wrapper">
		<p>웹디자인개발기능사</p>
		<nav v-if="rLinks && rLinks.length > 0">
			<p v-for="(rLink, index) in rLinks" :key="index">
				<router-link v-bind:to="rLink.link">{{
					rLink.name
				}}</router-link>
				<span v-if="index < rLinks.length - 1"> |&nbsp;</span>
			</p>
		</nav>
		<hr />
		<router-view />
	</div>
</template>

<script setup>
import { ref } from 'vue';

const rLinks = ref([
	{ link: '/cwdd/a1', name: 'JUST 쇼핑몰' },
	{ link: '/cwdd/a2', name: 'Green 복지재단' },
	{ link: '/cwdd/a3', name: '강원천문대' },
	{ link: '/cwdd/a4', name: '유진건설' },
	{ link: '/cwdd/b1', name: '대한은행' },
]);
</script>

<style scoped>
#wrapper {
	width: 1400px;
}
nav > p {
	display: inline-block;
}
</style>
