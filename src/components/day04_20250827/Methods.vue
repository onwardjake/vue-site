<template>
	<div>
		<div class="bg">
			<div class="b1" @click="changeTxt">
				<p>{{ txt }}</p>
			</div>
		</div>
		<div class="bg" @mousemove="showPos">
			<div class="b1">
				<p>
					xPos : {{ xPos }}<br />
					yPos : {{ yPos }}
				</p>
			</div>
		</div>
		<div class="bg">
			<img class="images" v-bind:src="img_moose" />
			<!-- <p>{{ "Moose count: " + count }}</p> -->
			<p>{{ `Moose count: ${count}` }}</p>
			<button @click="addMoose(1)">+1</button>
			<button @click="addMoose(5)">+5</button>
			<button @click="addMoose(-1)">-1</button>
		</div>
		<div class="bg">
			<img
				class="images"
				id="tiger"
				v-bind:src="img_tiger"
				v-on:click="roar($event, '어흥~!')"
			/>
			<p>호랑이가 하는 말은? "{{ tiger_msg }}"</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import img_moose from '../../assets/day04/img_moose.jpg';
import img_tiger from '../../assets/day04/img_tiger_square.jpeg';

const txt = ref('txt');
const changeTxt = () => {
	txt.value = 'Hello World!';
};

const xPos = ref(0);
const yPos = ref(0);
const showPos = (e) => {
	xPos.value = e.offsetX;
	yPos.value = e.offsetY;
};

const count = ref(0);
const addMoose = (c) => {
	count.value += c;
};

const tiger_msg = ref('');
const roar = (e, msg) => {
	tiger_msg.value = `${e.target.id}가 외칩니다. 다 같이~ ${msg}`;
};
</script>

<style scoped>
.images {
	width: 200px;
}
.bg {
	margin: 10px;
	border-bottom: 3px double purple;
}
.b1 {
	width: 200px;
	height: 100px;
	background-color: rgb(92, 92, 64);
	display: inline-block;
}
button:not(:last-child) {
	margin-right: 10px;
}
</style>
