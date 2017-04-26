<template>
	<div>
		<div class="details-page">
			<div class="pic">
				<img src="../../../static/resource/img/shop_img.jpg">
			</div>
			<div class="shop">
				<h3 v-text='datas_info.name'></h3>
				<p class="sale">月售<span v-text="datas_info.month_sale"></span>份&nbsp;好评率<span v-text="datas_info.love_rate"></span></p>
				<div class="buy clearfix">
					<div class="price"><p class="now" v-text="datas_info.price_now"></p><span class="old" v-text="datas_info.price_old"></span></div>
					<div class="car">加入购物车</div>
				</div>
			</div>

			<div class="introduce">
				<h3>商品介绍</h3>
				<p v-text="datas_info.product_intro"></p>
			</div>

			<div class="evaluation">
				<h3>商品评价</h3>
				<div class="kinds">
					<span class="first">全部<i>57</i></span>
					<span class="second">推荐<i>47</i></span>
					<span class="third">吐槽<i>10</i></span>
				</div>
				<div class="chose">
					<img src="../../../static/resource/img/arrow.jpg" alt="">
					<span>只看有内容的评价</span>
				</div>
			</div>
			<div class="data-list">
				<ul>
					<li v-for="item in datas_list">
						<div class="date clearfix">
							<div class="time"><span v-text="item.time_date"></span>&nbsp;<span v-text="item.time_hour"></span></div>
							<div class="avatar"><span v-text="item.id"></span><img :src="item.avatar"></div>
						</div>
						<div class="zan">
							<img :src="item.src">
							<span v-text="item.content">太少了，不够一个人吃</span>
						</div>
					</li>
				</ul>
				<!-- <img src="../../../static/resource/img/avatar.jpg" height="24" width="24" alt=""> -->
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
				datas_info:{},
				datas_list:[]
			}
		},
		mounted(){
			this.datas_info = {
				name: '皮蛋瘦肉粥',
				month_sale: '1132',
				love_rate: '100%',
				price_now: '¥24',
				price_old: '¥28',
				product_intro: '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹和瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足。',
			},
			this.datas_list = [
				{	
					time_date: '2016-07-07',
					time_hour: '12:34',
					id: '3********6',
					avatar: '../../../static/resource/img/avatar.jpg',
					src: '../../../static/resource/img/zan1.jpg',
					content: '太少了，不够一个人吃'
				},
				{	
					time_date: '2016-07-07',
					time_hour: '12:34',
					id: '3********6',
					avatar: '../../../static/resource/img/avatar.jpg',
					src: '../../../static/resource/img/zan1.jpg',
					content: '太少了，不够一个人吃'
				},
				{	
					time_date: '2016-07-07',
					time_hour: '12:34',
					id: '3********6',
					avatar: '../../../static/resource/img/avatar.jpg',
					src: '../../../static/resource/img/zan1.jpg',
					content: '太少了，不够一个人吃'
				},
				{	
					time_date: '2016-07-07',
					time_hour: '12:34',
					id: '3********6',
					avatar: '../../../static/resource/img/avatar.jpg',
					src: '../../../static/resource/img/zan1.jpg',
					content: '太少了，不够一个人吃'
				},
			]
		},
		components:{
			shoppingCar
		}
	}
</script>


