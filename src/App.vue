<script setup>
import { ref } from 'vue';

const rLinks = ref([
	{ link: '/', name: 'Home' },
	{ link: '/day02', name: 'Day02' },
	{ link: '/day03', name: 'Day03' },
	{ link: '/day04', name: 'Day04' },
	{ link: '/cwdd', name: 'Day05' },
]);
</script>

<template>
	<div id="main">
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

<style scoped>
* {
	margin: 0;
	padding: 0;
}

nav > p {
	display: inline-block;
}

#main {
	margin-top: 20px;
	padding: 10px;
	border: 1px solid orange;
	border-radius: 10px;
}

#main > hr {
	margin: 10px 0;
}
</style>
