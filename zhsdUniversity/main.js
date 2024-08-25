import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { $http } from './utils/http.js'
// import api from './common/api'
//vuex使用
import store from "/store"
import Vuex from "vuex";
// #ifdef H5
import VConsole from 'vconsole'
new VConsole()
// #endif 
import { baseUrl } from './conf'

export default function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	// 设置全局属性
	app.config.productionTip = false
	// app.config.globalProperties.$api = api;
	// 配置请求根路径
	$http.baseUrl = baseUrl + "/api"
	uni.$http = $http
	uni.$apiKey = 'xxxxxxxxx'

	// 请求开始之前做一些事情
	$http.beforeRequest = function(options) {
		uni.showLoading({
			title: '数据加载中...',
		})
	}
	
	// 请求完成之后做一些事情
	$http.afterRequest = function() {
		uni.hideLoading()
	}


	return {
		Vuex, //注意：如果 nvue 使用 vuex 的各种map工具方法时，必须 return Vuex
		app
	}
}
// #endif