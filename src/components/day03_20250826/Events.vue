<template>
	<div>
		<button v-on:click="cnt++">증가버튼 {{ cnt }}</button>
		<hr />
		<img :src="light[turnOn].src" :alt="light[turnOn].name" />
		<button v-on:click="turnOn == 1 ? (turnOn = 0) : (turnOn = 1)">
			{{ light[turnOn].name }}
		</button>
		<hr />
		<div>
			<!-- v-on:input을 줄여서 @input으로 써도 된다 -->
			<input type="text" @input="inputCount++" />
			<p>Count : {{ inputCount }}</p>
		</div>
		<div
			class="random"
			v-on:mousemove="colorVal = Math.floor(Math.random() * 360)"
			v-bind:style="{ backgroundColor: ` hsl(${colorVal}, 60%, 60%)` }"
		>
			<p>colorVal : {{ colorVal }}</p>
		</div>
		<hr />
		<div class="menus">
			<img v-bind:src="imgUrl" />
			<li
				v-for="menu in menuTotal"
				:key="menu.name"
				v-on:click="imgUrl = menu.src"
				v-bind:alt="menu.name"
			>
				{{ menu.name }}
			</li>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import pic_bulbon from '../../assets/day03/pic_bulbon.gif';
import pic_bulboff from '../../assets/day03/pic_bulboff.gif';
import img_burrito from '../../assets/day03/img_burrito.svg';
import img_salad from '../../assets/day03/img_salad.svg';
import img_cake from '../../assets/day03/img_cake.svg';
import img_soup from '../../assets/day03/img_soup.svg';
import img_fish from '../../assets/day03/img_fish.svg';
import img_pizza from '../../assets/day03/img_pizza.svg';
import img_rice from '../../assets/day03/img_rice.svg';

const cnt = ref(0);
const turnOn = ref(0);
const light = ref([
	{ name: 'Turn on the light', src: pic_bulboff },
	{ name: 'Turn off the light', src: pic_bulbon },
]);

const inputCount = ref(0);
const colorVal = ref(50);

const menuTotal = ref([
	{ name: '브리또', src: img_burrito },
	{ name: '샐러드', src: img_salad },
	{ name: '케이크', src: img_cake },
	{ name: '스프', src: img_soup },
	{ name: '생선', src: img_fish },
	{ name: '피자', src: img_pizza },
	{ name: '밥', src: img_rice },
]);
const imgUrl = ref(menuTotal.value[0].src);
</script>

<style scoped>
.random {
	height: 100px;
	background-color: #fff;
	line-height: 100px;
}

.menus {
	width: 290px;
	height: 200px;
	display: inline-block;
}
.menus > li {
	width: 70px;
	list-style-type: none;
}
.menus > li:hover {
	cursor: pointer;
	background-color: #ccc;
}
.menus > img {
	width: 150px;
	height: 200px;
	float: right;
	margin: auto;
}
</style>
