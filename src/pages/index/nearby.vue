<template>
  <div>
    <v-nav>
      <li></li>
        <template v-for="item in list">
          <li :class="{active:item.path == $route.path}"  flex="main:center cross:center"> 
            <router-link :to="item.path">
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </template>
        <li></li>
    </v-nav>
    <section class="v-content">
      <h3>helloe</h3>
     <h3>helloe</h3>
      <h3>helloe</h3>
       <h3>helloe</h3>
        <h3>helloe</h3>
         <h3>helloe</h3>
          <h3>helloe</h3>
           <h3>helloe</h3>
            <h3>helloe</h3>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>

import {mapActions,mapState} from 'vuex'
import img from '../.././assets/pic_1.png'
import VFooter from '../.././components/index/VFooter.vue'
import VNav from '../.././components/index/VNav.vue'

const fetchlist = store => store.dispatch('FETCH_LIST')
export default {
  data () {
    return {
      msg: 'Welcome to index pages',
      activeTab : 'tab1',
      img
    }
  },
  components: {
    VFooter,
    VNav
  },
  computed: {
    ...mapState({
      list:state => state.list
    })
  },
  // preFetch : fetchlist,
  beforeMount() {
    if(!this.list.length) {
      fetchlist(this.$store)
    }
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
  @import "../../less/comment";

  section.v-content>ul>li:not(:last-child) {
    border-bottom:1px solid @gray-line;
  }
  section.v-content{
    ul {
    }
    .media {
      display:flex;
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
</style>