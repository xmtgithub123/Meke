<template>
  <div>
    <v-nav></v-nav>
    <section class="v-content" v-scroll-record>
      <ul>
        <li v-for="(item,index) in list" key="item.id">
         <!-- {{item}} -->

                <div class="media">
                  <div class="media-left">
                     
                    
                    <img class="media-figure media-avatar-circle" src="./../../assets/avatar.png" alt="">
                    <div class="media-body">
                        <p> {{index+1}}{{item.user.mobile}}<span>{{item.created_at | formatDate}}</span></p>
                        <a href="#"># 锅炉房 #</a>
                    </div>
                  </div>
                  <div class="media-right">
                    <el-dropdown trigger="click" >
                    <span class="el-dropdown-link">
                      <i class="el-icon-more el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>分享</el-dropdown-item>
                      <el-dropdown-item>举报</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  </div>
                </div>
                <router-link :to="'/comment/'+ item.id">
                    <img :src="item.images" alt="" class="img-responsive" v-lazy="item.images[0]">
                </router-link>
                <div class="v-list-operate">
                  <ul flex="box:mean">
                    <li flex="main:center cross:center">
                      <div class="clickThing"  >
                        <!-- <img src="./../../assets/support.png" alt=""> <span v-if="item"> +{{ups}}</span> -->
                        <vue-star animate="animated bounceIn" color="#F05654" @click="fabulousItem(item)">
                          <i slot="icon" class="fa fa-heart-o"></i>
                        </vue-star>
                        <span v-if="item" class="ups-count">{{ups}}</span>
                      </div>
                      
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
              <p>所有<span>123</span>条评论</p>
              <ul>
                <li>
                  <p for="">老牛：<span>这里是一条评论</span></p>
                </li>
                <li>
                  <p for="">佳宝006：<span>这里是一条评论</span></p>
                </li>
              </ul>
            </div>
              <!--  {{item}} -->
    
        </li>
      </ul>
     <v-loading :complete="complete" :loading="loading" @seeing="seeing"></v-loading>
    </section>    
    <v-footer></v-footer>
   

  </div>
</template>
<script>

import {mapActions,mapState} from 'vuex'
import img from '../.././assets/pic_1.png'
import VFooter from '../.././components/index/VFooter.vue'
import VLoading from '../.././components/VLoading.vue'
import VNav from '../.././components/index/VNav.vue'
import store from '../../store'
import moment from 'moment'
import util from '../.././util'
import VueStar from 'vue-star'
import axios from 'axios'
import qs from 'qs'
import is from 'is'

import utils from '../.././util'
import pullList from '../.././mixins/pull-list.js'
export default {
  
  data () {
    return {
      msg: 'Welcome to index pages',
      activeTab : 'tab1',
      img,
      ups:0,
      list:{},
      top:0,
      bottom:10,
      pages:0,
      limits:6
    }
  },
  components: {
    VFooter,
    VNav,
    VueStar,
    VLoading
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
     
    })
  },
  mixins:[pullList],
  methods: {
    _pullList(){
        var { page, $route } = this
       
        return {
            url: '/api/v1/posts',
            data: { page }
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../less/config";
  @import "../../less/comment";

  section.v-content .items_list>li:not(:last-child) {
    border-bottom:1px solid @gray-line;
  }
  section.v-content{
    ul {
          position: relative;
          overflow: visible;
    }
    .media {
      display:flex;@gray-line
      justify-content:space-between;
      align-items: center;
      padding:1rem;
    }
    .media-rigure {
      margin-right:1rem;
    }
    .media-left {
     display:flex;
     justify-content:flex-start;
     .media-body {
      margin-left:1rem;
      p {
        margin:5px 0;
        font-size:1.2rem;
        span {
          font-size:0.8rem;
          margin-left:1.5rem;
          color:@gray-text-01;
        }
      }
     }
     a{
      font-size:0.8rem;
      color:@blue;
     }
    }
  }
  
  .v-add-element-btn {
    position:absolute;
    right:1rem;
    bottom:70px;
    z-index:101;
    button {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      box-shadow: 0 2px 5px @gray-text-02;
      i {
        font-size:18px;
      }
    }
  }

  .VueStar {
        position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    /* border: 1px solid red; */
    margin-top: -25px;

    i {
      font-size:22px;

    }
  }
  .ups-count {
    display:inline-block;
    margin-top:5px;
     margin-left:2rem !important;
  }
  .pull-to-refresh-layer {
    margin-top:-100px !important;
  }
</style>


<!-- 测试axios 数据列表 -->
    <!-- <ul class="list">
        <li v-for="item in list" key="item.id">
                <div class="top" flex="box:first">
                    <div class="headimg" :style="{backgroundImage:'url('+ item.author.avatar_url +')'}"></div>
                    <div class="box" flex="dir:top">
                        <strong>{{item.author.loginname}}</strong>
                        <div flex>
                            <time>{{item.create_at | formatDate }}</time>
                        </div>
                     
                    </div>
                </div>
                <div class="expand" flex="box:mean">
                    <div class="item click" flex="main:center cross:center">
                        <i class="iconfont icon-click"></i>
                        <div class="num">{{ item.visit_count > 0 ? item.visit_count : '暂无阅读' }}</div>
                    </div>
                    <div class="item reply" flex="main:center cross:center">
                        <i class="iconfont icon-comment"></i>
                        <div class="num">{{ item.reply_count > 0 ? item.reply_count : '暂无评论' }}</div>
                    </div>
                    <div class="item last-reply" flex="main:center cross:center">
                        <time class="time">{{ item.last_reply_at | formatDate}}</time>
                    </div>
                </div>
        </li> 
      </ul> -->