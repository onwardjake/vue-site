<template>
	<div>
		<h2>이미지 바인드</h2>
		<img v-bind:src="img_beach" alt="img_beach" />
		<br />
		<hr />
		<h2>CSS 스타일 바인드</h2>
		<h3>직접 스타일 주기</h3>
		<p v-bind:style="{ fontSize: sizeString }">샘플 텍스트 1111</p>
		<p v-bind:style="{ fontSize: sizeNum + 'px' }">샘플 텍스트 222</p>
		<!-- 아래와 같이 CSS syntax(kebab-case)를 사용해도 되지만, 권장하지는 않음 -->
		<p v-bind:style="{ 'font-size': sizeNum + 'px' }">샘플 텍스트 333</p>
		<div :style="{ backgroundColor: `rgb(${bgVal}, 100, 100)` }">
			<p>div에 배경색 지정</p>
		</div>
		<div :style="{ backgroundColor: 'rgb(' + bgVal + ', 50, 150)' }">
			<p>div에 배경색 지정222</p>
		</div>
		<div
			:style="{
				backgroundColor: isImportant ? 'lightcoral' : 'lightgray',
			}"
		>
			<p>
				Conditional backtround color : isImportant 값은
				{{ isImportant ? 'true' : 'false' }} 입니다.
			</p>
		</div>
		<h3>스타일 클래스 적용하기</h3>
		<div v-bind:class="cssClass">
			divClass에 정의된 CSS 스타일을 적용합니다.
		</div>
		<div v-bind:class="{ myClass: true }">
			myClass에 정의된 CSS 스타일을 적용합니다. (true)
		</div>
		<div v-bind:class="{ myClass: false }">
			myClass에 정의된 CSS 스타일을 적용합니다. (false)
		</div>
		<div v-bind:class="{ myClass: isImportant }">
			myClass에 정의된 CSS 스타일을 적용합니다. isImportant : ({{
				isImportant ? 'true' : 'false'
			}})
		</div>
		<br />
		<hr />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import img_beach from '../../assets/img_beach3.jpg';
const sizeString = ref('20px');
const sizeNum = ref(30);
const bgVal = ref(180);
const isImportant = ref(true);
const cssClass = ref('divClass');
</script>

<style scoped>
img {
	width: 50%;
}

.divClass {
	color: #000;
	background-color: yellow;
	border: 3px dashed rebeccapurple;
}
.myClass {
	background-color: red;
}
</style>
