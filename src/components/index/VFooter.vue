<template>
  <div class="v-footer">
    <ul flex="box:mean">
    	<li v-for="item in list" >
        <router-link :to="item.path" >
          <img :src="[item.imgUrl]" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'v-footer',
    data() {
      return {
        list:[
          {
            path:'/',
            imgUrl:require('../.././assets/w_index.png')
          },
          {
            path:'/stores',
            imgUrl:require('../.././assets/w_store.png')
          },
          {
            path:'/comment',
            imgUrl:require('../.././assets/w_message.png')
          },
          {
            path:'/my',
            imgUrl:require('../.././assets/w_center.png')
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  a {
    color:#333;
  }
  .v-footer {
    position:absolute;
    right:0;
    bottom:0;
    left:0;
    z-index:50;
    text-align:center;
    background-color:white;
    ul {
      padding: 8px 0;
      img {
        width:32px;
        height:32px;
      }
      p{
        margin:0;
      }
    }
  }
</style>