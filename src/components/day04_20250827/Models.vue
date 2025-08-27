<template>
	<div>
		<div>
			<h3>양방향 바인딩 (Two-way binding)</h3>
			<input type="text" v-model="inpTxt" />
			<p>{{ inpTxt }}</p>
			<hr />
		</div>
		<div>
			<p>
				Important item?
				<label>
					<input type="checkbox" v-model="important" />
					{{ important ? 'yes' : 'no' }}
				</label>
			</p>
			<hr />
		</div>
		<div>
			<form v-on:submit.prevent="addProd">
				<p><strong>----- 구매 목록 -----</strong></p>
				<label for="pname">
					구매 상품명 :
					<input
						id="pname"
						type="text"
						v-model="prod_name"
						required
					/>
				</label>
				<label for="pnum">
					구매 개수 :
					<input
						id="pnum"
						type="number"
						v-model.number="prod_num"
						required
					/>
				</label>
				<label for="pimportant">
					중요 품목 여부 :
					<input
						type="checkbox"
						id="pimportant"
						v-model="prod_important"
					/>
					{{ prod_important }}
				</label>
				<label>
					<textarea
						id=""
						cols="30"
						rows="5"
						v-model="prod_note"
						placeholder="메모를 입력하세요"
					></textarea>
				</label>
				<button type="submit">장바구니에 추가</button>
			</form>

			<p><strong>----- 장바구니 목록 -----</strong></p>
			<ol>
				<li v-for="(list, index) in shoppingList" :key="index">
					상품명 : {{ list.name }}, 개수 : {{ list.num }}, 중요도 :
					{{ list.important ? '높음' : '낮음' }}, 메모 :
					{{ list.note }}
					<!-- <button v-on:click="shoppingList.slice(index, 1)">X</button> -->
					<button v-on:click="deleteItem(index)">X</button>
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const inpTxt = ref('Initial text');
const important = ref(false);

const prod_name = ref('');
const prod_num = ref(1);
const prod_important = ref(false);
const prod_note = ref('');
const shoppingList = ref([]);
const addProd = () => {
	shoppingList.value.push({
		name: prod_name.value,
		num: prod_num.value,
		important: prod_important.value,
		note: prod_note.value,
	});

	prod_name.value = '';
	prod_num.value = 1;
	prod_important.value = false;
	prod_note.value = '';
};

const deleteItem = (index) => {
	shoppingList.value.splice(index, 1);
	console.log(`${shoppingList.value}`);
};
</script>

<style scoped>
label {
	display: block;
	margin: 5px 0;
}
</style>
