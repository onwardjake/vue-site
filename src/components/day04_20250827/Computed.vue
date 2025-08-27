<template>
	<div id="wrapper">
		<h3>computed란?</h3>
		<p>
			computed 속성은 Vue 컴포넌트 내에서 **계산된 속성(Computed
			Property)**을 정의할 때 사용합니다. 이는 데이터(data)를 바탕으로
			값을 계산하여 반환하지만, 일반적인 메서드와는 다르게 의존하는
			데이터가 변경될 때만 다시 계산됩니다. 즉, 캐싱(memoization)이 적용된
			속성입니다.
		</p>
		<h3>특징 및 장점</h3>
		<ul>
			<li>
				캐싱
				<ul>
					<li>
						의존하는 데이터(reactive data)가 변경되지 않는 한, 값이
						재계산되지 않고 기존 결과를 재사용하므로 성능에
						유리합니다.
					</li>
				</ul>
			</li>
			<li>
				템플릿에서 변수처럼 사용 가능
				<ul>
					<li>
						호출 시 함수처럼 괄호를 붙이지 않고 변수처럼 사용할 수
						있습니다.
					</li>
				</ul>
			</li>
			<li>
				반응형
				<ul>
					<li>
						computed가 의존하는 데이터가 변경되면 자동으로 값이
						업데이트되고, 컴포넌트는 변경사항을 인지할 수 있습니다.
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup></script>

<style scoped>
#wrapper {
	text-align: left;
}
</style>
