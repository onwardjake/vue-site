<template>
	<div>
		<p v-if="typewriterInStock">재고 있음</p>
		<p v-else>재고 없음</p>

		<p v-if="typewriterCount > 0">재고 있음</p>
		<p v-else>재고 없음</p>

		<p v-if="typewriterCount2 > 3">재고 있음</p>
		<p v-else-if="typewriterCount2 > 0">품절임박</p>
		<p v-else>재고 없음</p>

		<hr />
		<p v-if="sampleText.includes('pizza')">
			"pizza" 글자가 포함되어 있습니다.
		</p>
		<p v-else>"pizza" 글자 미포함</p>

		<!-- v-if 안에 2개 이상의 요소가 올 때는 div 태그로 묶어야 한다. -->
		<div v-if="sampleText2.includes('피자')">
			<p>피자피자</p>
			<img v-bind:src="img_pizza" alt="" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import img_pizza from '../../assets/img_pizza.svg';

const typewriterInStock = ref(true);
const typewriterCount = ref(0);
const typewriterCount2 = ref(2);

const sampleText = ref(
	'I like tack, pizza, Thai beef salad, pho soup and tagine.'
);
const sampleText2 = ref(
	'I like tack, pizza 피자 , Thai beef salad, pho soup and tagine.'
);
</script>

<style lang="scss" scoped></style>
