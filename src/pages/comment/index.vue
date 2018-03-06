<template>
  <div class="hello">
    <h4>评论</h4>
    <nav>
      <ul flex="box:mean">
        <li>
        	<div v-on:click="$router.go(-1)">
        		<i class="el-icon-arrow-left"></i>
        	</div>
        </li>
        <li flex="main:center cross:center">
           评论
        </li>
        <li></li>
      </ul>
    </nav>
    <section class="v-content v-full-content">
      <ul>
        <li>
          <div class="media">
            <div class="media-left">
              <img class="media-figure media-avatar-circle" src="./../../assets/avatar.png" alt="">
              <div class="media-body">
                  <p>老牛 <span>一天前</span></p>
                  <a href="#"># 锅炉房 #</a>
              </div>
            </div>
            <div class="media-right">
              <el-dropdown trigger="click" >
              <span class="el-dropdown-link">
                <i class="el-icon-more el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
          </div>
          <img src="./../../assets/pic_2.png" alt="" class="img-responsive">
          <div class="v-list-operate">
            <ul flex="box:mean">
              <li flex="main:center cross:center">
                <img src="./../../assets/support.png" alt=""> <span> + 24</span>
              </li>
              <li flex="main:center cross:center">
                <img src="./../../assets/comment.png" alt=""> <span> 123 </span>
              </li>
              <li flex="main:center cross:center">
                <img src="./../../assets/play.png" alt=""><span> + 888 </span>
              </li>
            </ul>
          </div>
          <div class="v-comments-list">
            <ul>
              <li>
              	<div class="media">
			            <div class="media-left">
			              <img class="media-figure media-avatar-circle" src="./../../assets/avatar.png" alt="">
			              <div class="media-body media-comment-list">
			                  <span>老牛 </span>
			                  <small>一天前</small>
			                  <div class="pull-right">
			                  	<i class="fa fa-commenting-o" aria-hidden="true"></i>
			                  </div>
			                  <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
在界面中一致：所有的元素和结构需保持一致</p>
			              </div>
			            </div>
			          </div>
              </li>
              <li>
              	<div class="media">
			            <div class="media-left">
			              <img class="media-figure media-avatar-circle" src="./../../assets/avatar.png" alt="">
			              <div class="media-body media-comment-list">
			                  <span>老牛 </span>
			                  <small>2017-3-28 15:23</small>
			                  
			                  	<i class="fa fa-commenting-o pull-right" aria-hidden="true"></i>
			                  
			                  <p>现实生活一致：与现实生活的流程、</p>
			              </div>
			            </div>
			          </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
    <div class="v-comment-reply-footer" v-if="user.mobile" >
    	 <img src="./../../assets/comment.png" alt="" style="width:24px;height:24px;">
    	 <el-input v-model="input" placeholder="添加评论"></el-input>
			 <el-button type="text">发送</el-button>
    </div>
    <div class="v-comment-reply-footer" v-else>
      你还未登录，请先<router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>

import {mapActions,mapState} from 'vuex'

export default {
  data () {
    return {
      msg: 'Welcome to index pages',
      input:''
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../less/config";
  @import '../../less/comment';
	nav {
		padding:0 1rem;
    font-size:1rem;
	}
	.media-left {
		width:100%;
	}
	.media-comment-list {
		width:100%;

		span {
			color:@blue;
		}
		p{
			font-size:1rem !important;
			font-weight:normal !important;
		}
		small,i {
			margin-left:0.5rem;
			color:@gray-line;
			font-size:0.8rem !important;
		}
		i {
			font-size:1rem !important;
		}
	}
	.v-comment-reply-footer {
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  position:absolute;
	    right:0;
	    bottom:0;
	    left:0;
	    z-index:50;
	    min-height:50px;
	    text-align:center;
	    background-color:#f6f6f6;
	    padding:0 1rem;
			input {
				color:red !important;
			}
	}
	.el-input {
		padding:0 0.5rem;	
	}

</style>
