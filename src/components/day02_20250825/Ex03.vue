<template>
	<div>
		<div v-show="showDiv">이 엘리먼트는 감출 수 있어요</div>

		<p>v-show는 display 속성을 제어하여 요소를 보이거나 안보이게 한다.</p>
		<p>v-if는 요소를 생성하거나 생성하지 않게 제어한다.</p>
		<div v-if="showDiv">
			<p>요소를 생성합니다.</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(false);
</script>

<style lang="scss" scoped></style>
