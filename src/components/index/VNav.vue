<template>
  <div>
    <nav>
      <ul flex="box:mean">
        <li></li>
        <template v-for="item in list">
          <li :class="{active:item.path == $route.path}"  flex="main:center cross:center"> 
            <router-link :to="item.path">
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </template>
        <li></li>
      </ul>
    </nav>
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
            name:'新鲜的'
          },
          {
            path:'/nearby',
            name:'附近的'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>

  nav {
    ul {
      li {
        position:relative;
        a{
          color:white;
          font-size:1rem;
          
        }
      }
      }
    }
    li.active a:after {
        content:'';
        position:absolute;
        left:0;
        right:0;
        background-color:red;
        bottom:2px;
        border-bottom:2px solid white;
    }
</style>