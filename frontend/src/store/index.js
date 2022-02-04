import { createStore } from 'vuex'
import { votingsModule } from '@/store/votingsModule'

export default createStore({
	state: {
		isSignedIn: false,
		userId: 404
	},
	getters: {
		isSignedIn(state){
			return state.isSignedIn;
		},
		userId(state){
			return state.userId;
		}
	},
  	mutations: {
		setAuth(state, bool){
			state.isSignedIn = bool;
		},
		setUserId(state, string){
			state.userId = string;
		},
		changeAuthStatus(state){
			state.isSignedIn = !state.isSignedIn;
		}
  	},
  	modules: {
		  voting: votingsModule
  	}
})
