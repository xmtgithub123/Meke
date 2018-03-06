<template>
  <div>
    <v-nav></v-nav>
    <section class="v-content" v-scroll-record>
      <scroller 
            :on-refresh="refresh"
            :on-infinite="infinite"
            refresh-layer-color="#20a0ff"
            loading-layer-color="#20a0ff"
            style="top: 0;">
      <svg class="spinner" style="stroke: #20a0ff;" slot="refresh-spinner" viewBox="0 0 64 64">
        <g stroke-width="7" stroke-linecap="round"><line x1="10" x2="10" y1="27.3836" y2="36.4931"><animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate></line><line x1="24" x2="24" y1="18.6164" y2="45.3836"><animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate></line><line x1="38" x2="38" y1="16.1233" y2="47.8767"><animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate></line><line x1="52" x2="52" y1="16" y2="48"><animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate></line></g></svg>
      <ul>
        <li v-for="(item,index) in list">
         <!-- {{item}} -->

                <div class="media">
                  <div class="media-left">
                     
                    
                    <img class="media-figure media-avatar-circle" src="./../../assets/avatar.png" alt="">
                    <div class="media-body">
                        <p> {{index+1}}{{item.user.mobile}}<span>{{item.created_at | formatDate}}</span></p>
                        <a href="#"># {{item.content}} #</a>
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
      <svg class="spinner" style="fill: #20a0ff;" slot="infinite-spinner" viewBox="0 0 64 64">
        <g><circle cx="16" cy="32" stroke-width="0" r="3"><animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate></circle><circle cx="32" cy="32" stroke-width="0" r="3.09351"><animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate></circle><circle cx="48" cy="32" stroke-width="0" r="4.09351"><animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate></circle></g></svg>
       </scroller>
    </section>    
    <v-footer></v-footer>
    <div class="v-add-element-btn">
      <el-button type="primary" icon="plus" v-on:click="$router.push('/post/create')"></el-button>
    </div>
  </div>
</template>
<script>

import {mapActions,mapState} from 'vuex'
import img from '../.././assets/pic_1.png'
import VFooter from '../.././components/index/VFooter.vue'
import VNav from '../.././components/index/VNav.vue'
import store from '../../store'
import moment from 'moment'
import util from '../.././util'
import VueStar from 'vue-star'
import axios from 'axios'
import qs from 'qs'
import is from 'is'

export default {
  data () {
    return {
      msg: 'Welcome to index pages',
      activeTab : 'tab1',
      img,
      ups:0,
      list:[],
      listObj:[],
      top:0,
      bottom:10,
      pages:0,
      limits:6
    }
  },
  components: {
    VFooter,
    VNav,
    VueStar
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
     
    })
  },
 
  mounted() {
      var that =  this;
      axios.get('http://stg-api.meikeapp.party/api/v1/posts',{
        params:{
          page:that.top,
          limit:that.bottom
        }
      }).then(function(res){
      
        res.data.data.forEach(function(e,i) {
          // console.log(e)
          that.list.push({content:e.content,created_at:e.created_at,id:e.id,images:e.images,user:e.user})
        })
        
      })
      .catch(function(error){
        console.log('error')
      })
    },
 
  methods: {
    // refresh(done) {
    //   var that = this;
    //   setTimeout(function(){
  
    //     axios.get('http://stg-api.meikeapp.party/api/v1/posts',{
    //       params:{
    //         page:that.top,
    //         limit:that.bottom
    //       }
    //     }).then(function(res){
    //       that.list = res.data.data
    //       that.list.forEach(function(e,i) {
    //         // console.log(e)
    //         that.listObj.push({content:e.content,created_at:e.created_at,id:e.id,images:e.images,user:e.user})
    //       })
         
    //     })
    //     .catch(function(error){

    //     })
    //     done();
    //   },1500)
    // },
    infinite(done) {
      var that = this;

      if(that.list.length >=20) {
        setTimeout(()=> {
          done(true)
        },1500)
        return;
      }
      setTimeout(()=> {
        that.top += 1;
        axios.get('http://stg-api.meikeapp.party/api/v1/posts',{
          params:{
            page:that.top,
            limit:that.bottom
          }
        }).then(function(res){
          
          res.data.data.forEach(function(e,i) {
            that.list.push({content:e.content,created_at:e.created_at,id:e.id,images:e.images,user:e.user})
          })
          console.log(that.list)
        })
        .catch(function(error){
        })
        // that.bottom = that.bottom+10;
         // console.log(that.bottom)
        setTimeout(()=> {
           done()
        })
      },1500)
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