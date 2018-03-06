<template>
  <div>
    <v-nav-comm>
      <li flex="main:center cross:center">发现好店</li>
    </v-nav-comm>
    <section class="v-content">
      adsdfsdf
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>

import {mapActions,mapState} from 'vuex'
import VNavComm from '../.././components/VNavComm.vue'
import VFooter from '../.././components/index/VFooter.vue'
export default {
  data () {
    return {
      msg: 'Welcome to index pages'
    }
  },
  components:{
    VNavComm,
  	VFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../less/config";
  @import "../../less/comment";

  section.v-content {
    padding:1rem;
  }
</style>
