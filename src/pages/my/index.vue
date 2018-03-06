<template>
  <div>
	<nav>
      <ul flex="box:mean">
        <li>
        	<div v-on:click="$router.go(-1)">
        		<i class="el-icon-arrow-left"></i>
        	</div>
        </li>
        <li flex="main:right">
        	<el-dropdown trigger="click" >
                <span class="el-dropdown-link">
                  <i class="el-icon-more el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >
                    <p v-if="user.mobile" v-on:click="$router.push('/signout')" style="margin:0;">
                      <i class="fa fa-power-off" aria-hidden="true"></i> 退出
                    </p>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 举报
                  </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
      </ul>
      <div class="account-avatar" flex="main:left cross:center">
      	<img class="media-figure media-avatar-circle-small" src="./../../assets/avatar.png" alt="">
      	<span class="fa fa-venus " aria-hidden="true"></span>
      	<p v-if="user.mobile">{{ user.mobile }}</p>
        <router-link v-if="!user.mobile" to="/login">
          <div class="user-name">你还未登录，请先登录！</div>
        </router-link>

      </div>
      
    </nav>
    <section class="v-content">

            
    	<ul flex="box:mean" v-if="user.mobile">
    		<li>
    			<h4>163次</h4>
    			<span>打赏</span>
    		</li>
    		<li>
    			<h4>12</h4>
    			<span>关注</span>
    		</li>
    		<li>
    			<h4>1568</h4>
    			<span>粉丝</span>
    		</li>
    	</ul>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VFooter from '../.././components/index/VFooter.vue'
import {mapActions,mapState} from 'vuex'

export default {
  data () {
    return {
      msg: 'Welcome to index pages'
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user
    })
  },
  components:{
  	VFooter
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
@import "../../less/config";
   nav {
   	height:10rem;
    line-height:1;
   	background-color:#717171;
   	ul {
   		padding:2rem 0;
   	}
   	.account-avatar{
   		
   		.media-avatar-circle-small {
	   		border:2px solid white;
        margin-right:1rem;
        width:4rem;
        height:4rem;
        border-radius:100%;
	   	}
	   	span {
	      position: absolute;
        bottom: 0.8rem;
        left: 4rem;
  			width:0.9rem;
  			height:0.9rem;
  			line-height:1rem;
  			text-align:center;
  			border-radius:100%;
  			color:white;
  			padding:0.1rem;
        font-size: 0.8rem;
  			background-color:#ff86d9;
	   	}
      a,p{
        color:white;
        font-size:1rem;
      }
   	}
   }
   section.v-content {
   	top:10rem;
   	ul {
   		padding:0.5rem 0;
   		border-bottom:1px solid #eee;
   		text-align:center;
   		h4 {
   			font-size:1.2rem;
   			font-weight:normal;
   			margin:0.5rem 0;
   			color:#4e4e4e;

   		}
   		span {
			font-size:0.6rem;
			color:#717171;
		}
   	}
   }
</style>
