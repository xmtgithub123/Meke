import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import Index from '@/pages/index/index' //新鲜的
import Index1 from '@/pages/index/index1'
import Index2 from '@/pages/index/index2'

import Nearby from '@/pages/index/nearby' //附近的
import Stores from '@/pages/stores/index' //发现好店
import My from '@/pages/my/index' // 个人中心
import Comment from '@/pages/comment/index' //评论 -动态详情页

//群聊
//红人榜
//店铺详情页
import Login from '@/pages/base/login' //登陆
import Register from '@/pages/base/register' //新人注册
import RegisterSecond from '@/pages/base/registerSecond' //新人注册_2
import RegisterThird from '@/pages/base/registerThird' //新人注册_3
import ForgetPassword from '@/pages/base/forgetPassword' //忘记密码
import ResetPassword from '@/pages/base/resetPassword' //重置密码
import store from '@/store/index'
Vue.use(Router)

export default new Router({
	mode: 'history',
	scrollBehavior: (to, from, savedPosition) => {
	    if (savedPosition) {
	      return savedPosition
	    }

	    let position = {
	      x: 0,
	      y: 0
	    }
	    if (to.path === '/') {
	      position.y = +sessionStorage.getItem('scrollTop') || 0
	    }
	    return position
	},
	beforeEach: ({meta, path},from, next) => {
		router.beforeEach(({meta, path}, from, next) => {
		    var { auth = true } = meta
		    var isLogin = Boolean(store.state.user.accesstoken) //true用户已登录， false用户未登录
		    if (auth && !isLogin && path !== '/login') {
		        return next({ path: '/login' })
		    }
		    next()
		})
	},
	routes: [
	    {
	      path: '/',
	      name: 'Index',
	      // meta: { auth: false },
	      component:Index
	      // component: resolve => require(['../pages/index/'], resolve)
	  	},
	  	{
	      path: '/index1',
	      name: 'Index1',
	      // meta: { auth: false },
	      component:Index1
	      // component: resolve => require(['../pages/index/'], resolve)
	  	},
	  	{
	      path: '/index2',
	      name: 'Index2',
	      // meta: { auth: false },
	      component:Index2
	      // component: resolve => require(['../pages/index/'], resolve)
	  	},
	  	{
			path:'/nearby',
			name:'Nearby',
	        component:Nearby
	  	},
	  	{
	  		path:'/comment/:id',
	  		name:'commentID',
	  		component: resolve => require(['../pages/comment/'], resolve)
	  	},
	    {
            path: '/post/create', //创建帖子
            component: resolve => require(['../pages/post/create/'], resolve)
        },
	    {
	    	path:'/stores',
	    	name:'Stores',
	    	component: resolve => require(['../pages/stores/'], resolve)
	    },
	    {
	    	path:'/my',
	    	name:'My',
	    	meta: { auth: false },
	    	component: resolve => require(['../pages/my/'], resolve)
	    },
	    {
	    	path:'/login',
	    	name:'login',
	    	meta: { auth: false },
	    	component: resolve => require(['../pages/base/login'], resolve)
	    },
	    {
	    	path:'/register',
	    	name:'register',
	    	component: resolve => require(['../pages/base/register'], resolve)
	    },
	    {
            path: '/signout', //退出
            component: resolve => require(['../pages/base/signout'], resolve)
        },
	    {
	    	path:'/registerSecond',
	    	name:'registerSecond',
	    	component:RegisterSecond
	    },
	    {
	    	path:'/registerThird',
	    	name:'RegisterThird',
	    	component:RegisterThird
	    },
	    {
	    	path:'/forgetPassword',
	    	name:'ForgetPassword',
	    	component:ForgetPassword
	    },
	    {
	    	path:'/resetPassword',
	    	name:'ResetPassword',
	    	component:ResetPassword
	    },
        {
            path: '*', //其他页面，强制跳转到登录页面
            redirect: '/login'
        }
	 ]
})


/**
 * auth true登录才能访问，false不需要登录，默认true
 */