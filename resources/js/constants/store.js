import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		popList: []
	},
	mutations: {
		setPops(state, payload) {
			state.popList = payload;
		}
	},
	actions: {
	}
})