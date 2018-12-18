import Vue from 'vue';
import Vuex, {Store} from 'vuex';
Vue.use(Vuex);
export default new Store({
	state: {
		search: ""
	},
	mutations: {
		updateSearch(state, value) {
			state.search = value;
		}
	}
})