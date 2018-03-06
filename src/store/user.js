import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const USER_REGISTER = 'USER_REGISTER' 

export default {
    state:JSON.parse(sessionStorage.getItem('user')) ||　{},
    mutations: {
        [USER_SIGNIN](state,user) {
            console.log("11111")
            console.log(state)
            console.log(user)
             console.log("2222")
            sessionStorage.setItem('user',JSON.stringify(user))
            Object.assign(state,user)
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state,k))
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}