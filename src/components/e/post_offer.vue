<template>
	<div>
		<div class="post_offer">
			<h2 v-text="datas.shop_name"></h2>
			<div class="offers">
				<h3><span v-text="datas.shop_offer"></span></h3>
				<ul>
					<li v-for="item in datas.offer_list">
						<img :src="item.icon">
						<span v-text="item.info"></span>
					</li>
				</ul>
			</div>
			<div class="post">
				<h3><span v-text="datas.shop_post"></span></h3>
				<p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然，0添加的良心品质深的消费者青睐，发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
			</div>
			
		</div>
		<shopping-car></shopping-car>
	</div>
</template>

<script>
	import shoppingCar from './common/shopping_car.vue'
	export default{
		data(){
			return{
				datas: {}
			}
		},
		mounted(){
			this.datas = {
				shop_name: '粥品香坊（航头店）',
				shop_offer: '优惠信息',
				shop_post: '商家公告',
				offer_list: [
					{icon: '../../../static/resource/img/decrease_1@2x.png', info: '在线支付满28减5，满50减10'},
					{icon: '../../../static/resource/img/discount_1@2x.png', info: '单人精彩赛'},
					{icon: '../../../static/resource/img/discount_1@2x.png', info: '清肺雪梨汤8折抢购'},
					{icon: '../../../static/resource/img/special_1@2x.png', info: '特价饮品8折抢购'},
					{icon: '../../../static/resource/img/special_1@2x.png', info: '单人特色套餐'}
				]
			}
			
		},
		components: {
			shoppingCar
		}
	}

	
</script>