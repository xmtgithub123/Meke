import Vue from 'vue'

export const IMG_URL = 'IMG_URL' 

export default {
    state:JSON.parse(sessionStorage.getItem('images')) ||　{},
    mutations: {
        [IMG_URL](state,images) {
            console.log("333")
            console.log(state)
             console.log(images)
             console.log("444")
            sessionStorage.setItem('images',JSON.stringify(images))
            Object.assign(state,images)
        }
    },
    actions: {
        [IMG_URL]({commit}, images) {
            commit(IMG_URL, images)
        }
    }
}