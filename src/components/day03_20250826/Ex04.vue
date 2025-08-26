<template>
	<div id="wrapper">
		<li v-for="(item, index) in items" :key="index">{{ item.message }}</li>
		<hr />

		메뉴 목록
		<ol>
			<li v-for="(menu, index) in menus" :key="index">
				{{ menu }}
				<img v-bind:src="menuImgs[index]" v-bind:alt="menu" />
			</li>
		</ol>

		<hr />
		<div class="menus" v-for="(menu, index) in menuTotal" :key="index">
			<li><img :src="menu.src" :alt="menu.name" /></li>
			<li>{{ menu.name }}</li>
		</div>
		<hr class="clear_float" />
		<div class="menus" v-for="menu in menuTotalPublic" :key="menu.name">
			<li><img :src="menu.src" :alt="menu.name" /></li>
			<li>{{ menu.name }}</li>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../../assets/day03/img_burrito.svg';
import img_salad from '../../assets/day03/img_salad.svg';
import img_cake from '../../assets/day03/img_cake.svg';
import img_soup from '../../assets/day03/img_soup.svg';
import img_fish from '../../assets/day03/img_fish.svg';
import img_pizza from '../../assets/day03/img_pizza.svg';
import img_rice from '../../assets/day03/img_rice.svg';

const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
const menus = ref(['브리또', '샐러드', '케이크', '스프', '생선', '피자', '밥']);
const menuImgs = ref([
	img_burrito,
	img_salad,
	img_cake,
	img_soup,
	img_fish,
	img_pizza,
	img_rice,
]);

// public 폴더가 아닌 다른 폴더에 있는 이미지는 import해서 써야한다.
const menuTotal = ref([
	{ name: '브리또', src: img_burrito },
	{ name: '샐러드', src: img_salad },
	{ name: '케이크', src: img_cake },
	{ name: '스프', src: img_soup },
	{ name: '생선', src: img_fish },
	{ name: '피자', src: img_pizza },
	{ name: '밥', src: img_rice },
]);

// public 폴더에 있는 이미지는 경로로 접근 가능하다
const menuTotalPublic = ref([
	{ name: '브리또', src: '/images/img_burrito.svg' },
	{ name: '샐러드', src: '/images/img_salad.svg' },
	{ name: '케이크', src: '/images/img_cake.svg' },
	{ name: '스프', src: '/images/img_soup.svg' },
	{ name: '생선', src: '/images/img_fish.svg' },
	{ name: '피자', src: '/images/img_pizza.svg' },
	{ name: '밥', src: '/images/img_rice.svg' },
]);
</script>

<style scoped>
#wrapper {
	height: 100%;
}

li {
	list-style-type: none;
}

.menus {
	float: left;
	margin: 5px;
	background-color: #65b0f7;
	font-size: 1.3em;
	font-weight: 700;
}
.clear_float {
	clear: both;
}
img {
	width: 50px;
}
</style>
