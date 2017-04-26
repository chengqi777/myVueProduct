
//vue的路由
import index from './components/index.vue'
import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'


import productList from './components/e/product_list.vue'
import postOffer from './components/e/post_offer.vue'
import evaluate from './components/e/evaluate.vue'
import detailsPage from './components/e/details_page.vue'

/*const routes = [
	{
		path: '/a',
		component: A
	},{
		path: '/b',
		component: B
	}
]*/
export default [
	{
		path: '',
		redirect: '/index',			//默认路由
	},{
		path: '/index',
		component: index
	},{
		path: '/a',
		component: A
	},{
		path: '/b',
		component: B
	},,{
		path: '/c',
		component: C
	},

	/*饿了嘛项目路由*/
	//商品列表页
	{
		path: '/productList',
		component: productList
	},
	//公告及优惠
	{
		path: '/postOffer',
		component: postOffer
	},
	//商品详情页
	{
		path: '/detailsPage',
		component: detailsPage
	},
	//评价页
	{
		path: '/evaluate',
		component: evaluate
	},




]