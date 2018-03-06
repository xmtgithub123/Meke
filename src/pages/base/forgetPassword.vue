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
        <h4>输入手机号</h4>
        <form class="form">
            <div class="line">
                <input class="text" type="text" placeholder="手机号" >
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
