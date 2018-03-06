<template>
  <div>
    <nav>
      <ul flex="main:justify">
        <li>
           <div v-on:click="$router.go(-1)">
              <i class="el-icon-close"></i>
           </div>
        </li>
      </ul>
    </nav>
    <section class="v-content" flex="dir:top main:center cross:center">
    
        <h4>填写昵称</h4>
        <span>好的昵称能让别人更容易记住你</span>
        <form class="form" @submit.prevent="submit">
            <div class="line">
                <input class="text" type="text" placeholder="昵称" v-model="nickname">
                {{ nickname }}
            </div>
            <div class="line">
                <button class="btn">下一步</button>
            </div>
        </form>
        <br>
       
    </section>
  </div>
</template>

<script>

import {mapActions,mapState} from 'vuex'
import img from '../.././assets/pic_1.png'
import axios from 'axios'
export default {
  data () {
    return {
      nickname: ''
    }
  },
  mounted() {
    this.getRoute()
  },
  methods: {
    submit() {
      console.log("aaa")
    },
    getRoute() {
      console.log(this.$route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../less/base";
</style>
