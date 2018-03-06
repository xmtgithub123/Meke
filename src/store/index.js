import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api'
import user from './user'
import imgURL from './imgURL'
import list from './list' //首页列表

Vue.use(Vuex)
export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
	modules: {
		user,
		imgURL,
		list
	}
})
// const store = new Vuex.Store({
// 	state:{
// 		list:[]
// 	},
// 	actions:{

// 		//第一种写法：与api.js相连接
// 		FETCH_LIST({commit}) {
// 			return api.fetchList().then(({data})=> {
// 				commit('SET_LIST',{list:{data}.data.data})
// 			})
// 		}

// 		//第二种写法：直接写在actions当中
// 		// FETCH_LIST ({commit}){
// 		// 	axios.get("https://cnodejs.org/api/v1/topics").then((response)=>{
// 		// 		commit('SET_LIST',{list:response.data.data})
// 		// 	},(err)=> {
// 		// 		console.log(err)
// 		// 	})
// 		// }
// 	},
// 	mutations:{
// 		SET_LIST:(state,{list})=> {
// 			state.list = list
// 		}
// 	}
// })

