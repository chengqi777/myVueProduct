<template>
	<div class="shopping-car">
		<div class="car-icon">
			<div class="arc">
				<div class="circle"></div>
			</div>
			<div class="car">
				<img src="../../../../static/resource/img/car.gif">
				<div class="many">5</div>
			</div>
		</div>
		<div class="txt-notice" v-if="false">
			<div class="kong">购物车为空</div>
			<p>¥0 起送</p>
		</div>
		<div class="start-send" v-else>
			<div class="money">
				<span class="sp1">¥11</span>
				<span class="sp2">满<i>20</i>配送费<i>5</i>元</span>
			</div>
			<button class="btn">去结算</button>
		</div>
	</div>
</template>