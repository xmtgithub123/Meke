import Vue from 'vue'
import * as api from './api'
export default {
	state:{
		list:[]
	},
	actions : {
		FETCH_LIST({commit}) {
			return api.fetchList().then(({data})=>{
				commit('SET_LIST',{list:{data}.data.data})
			})
		}
	},
	mutations: {
		SET_LIST:(state,{list}) => {
			state.list = list
			 // console.log(state.list)
		}
	}
}