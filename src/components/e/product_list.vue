<template>
	<div>
		<div class="product-page">
			<div class="header">
				<router-link to="/detailsPage">
					<div class="shop">
						<div class="left">
							<img src="../../../static/resource/img/shop_login.jpg" >
							<h3><i>品牌</i>粥品香坊(大运村)</h3>
							<p class="p1"><span>蜂鸟专送</span>/<span>38</span>分钟送达</p>
							<p class="p2"><img src="../../../static/resource/img/decrease_1@2x.png">在线支付满<i>28</i>减<i>5</i>,满<i>50</i>减<i>10</i></p>
						</div>
						<div class="right">></div>
					</div>
				</router-link>
				<div class="post">
					<span class="sp1">公告</span>
					<span class="sp2">粥品香坊其烹饪粥料的秘方源于中国千年古法，再融合现代制作工艺</span>
					<router-link class="sp3" to="/postOffer">></router-link>
				</div>
			</div>
			<div class="product">
				<div class="nav">
					<div v-for="(item,index) in nav" :class="item.selected ? 'current' : ''" v-text="item.text"   @click="checkTab(index)"></div>
					
				</div>
				<div class="category clearfix">
					<div class="cate-left">
						<ul>
							<li class="current"><span>热销榜</span></li>
							<li><span>单人特色套餐</span></li>
							<li><span>特色粥品</span></li>
							<li><span>精选热菜</span></li>
							<li><span>爽口凉菜</span></li>
							<li><span>特价菜</span></li>
							<li><span>畅销榜</span></li>
							<li><span>真好吃</span></li>
							<li><span>半成品</span></li>
							<li><span>饭类</span></li>
							<li><span>面类</span></li>
						</ul>
					</div>
					<div class="cate-right">
						<div class="container">
							<div>
								<h3>热销榜</h3>
								<ul>
									<li>热销菜</li>
								</ul>
							</div>
							<div>
								<h3>单人特色套餐</h3>
								<ul>
									<li>特色套餐</li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>
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
				nav:{}
			}
		},
		mounted(){
			this.nav = [
				{text: '商品',selected: true},
				{text: '评价',selected: false}
			]

		},
		methods:{

			checkTab(index){
				this.nav.forEach(function(v,i){
					v.selected = false
				})
				this.nav[index].selected = true
            }
		},
		components:{
			shoppingCar
		}
	}
</script>