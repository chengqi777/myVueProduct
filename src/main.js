// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'

/* eslint-disable no-new */

import 'assets/core/main.less'

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.debug = true

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes
})

const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')


/*new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})*/
