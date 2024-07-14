// vuex 状态管理

import { createStore } from 'vuex'
// import audio from "@/store/modules/audio.js"

const store = createStore({
	modules: {
		// audio
	},
	// 数据源
	state: {
		historyList: uni.getStorageSync("__history") || []
	},
	mutations: {
		// 同步的方法	
		SET_HISTORY_LIST(state, history) {
			state.historyList = history
		},
		CLEAR_HISTORY_LIST(state) {
			state.historyList = []
		}
	},
	actions: {
		// 异步
		set_history({commit, state}, history) {
			let list = state.historyList
			// 移出相同的元素
			if(list.includes(history)) {
				list = list.filter(item => item !== history)
			}
			list.unshift(history)
			uni.setStorageSync("__history", list)
			commit('SET_HISTORY_LIST', list)
		},
		clear_history({commit}) {
			uni.removeStorageSync("__history")
			commit('CLEAR_HISTORY_LIST')
		}
	}
})


export default store