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
        <h4>设置新密码</h4>
        <span>验证码已成功发送至手机号 13914202089</span>
        <form class="form">
            <div class="line">
                <input class="text" type="text" placeholder="设置新的密码，长度不小于6位" >
            </div>
            <div class="line verification-code-l">
                <input class="text" type="text" placeholder="验证码" >
                <el-button type="text">立即获取</el-button>
                <span>59 秒</span>
            </div>
            <div class="line">
                <button class="btn">确认修改</button>
            </div>
        </form>
        <br>
       
    </section>
  </div>
</template>

<script>

import {mapActions,mapState} from 'vuex'
import img from '../.././assets/pic_1.png'

export default {
  data () {
    return {
      msg: 'Welcome to index pages'
    }
  },
  components: {
  },
  computed: {
   
  },  
  mounted() {
    this.getRoute()
  },
  methods: {
    getRoute() {
      console.log(this.$route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../less/config";
    @import "../../less/base";
    .verification-code-l {
      position:relative;
      input {
        padding-right:5rem;
      }
      button {
        position:absolute;
        right:0.5rem;
        bottom:1rem;
      }
      span {
        position:absolute;
        right:-2.5rem;
        bottom:1.7rem;
        color:@blue;
      }
    }
</style>
