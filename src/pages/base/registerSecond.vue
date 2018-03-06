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
        <img class="media-figure media-avatar-circle" src="./../../assets/avatar.png" alt="">
        <h4>佳宝</h4>
        <form class="form">
            <div class="line">
            <select>
              <option disabled value="">Please select one</option>
              <option>男</option>
              <option>女</option>
              <option>其他</option>
            </select>
            </div>
            <div class="line">
                <input class="text" type="text" placeholder="生日" >
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
      msg: 'Welcome to index pages',
     
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
  @import "../../less/base";
  select{
    
    width:100%;
  }
</style>
