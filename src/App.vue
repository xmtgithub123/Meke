<template>
  <div id="app">

        <router-view class="view"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      enterActiveClass : 'animated fadeInRight'
    }
  },
  mounted() {
    this.appShow()
  },
  methods: {
    appShow() {
      const END_TIME = new Date().getTime() //结束时间
      const diffTime = END_TIME - PAGE_START_TIME
      const timer = setTimeout(() => {
        clearTimeout(timer)
        document.querySelector('.app-loading').className += 'app-loading-hide'
      },diffTime > 2000 ? 0 : 2000 - diffTime)
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth > fromDepth) {
        this.enterActiveClass = 'animated fadeInRight'
      } else {
        this.enterActiveClass = 'animated fadeInLeft'
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #app {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    max-width: 640px;
    margin: auto;
    font-size: 13px;
    background: #fff;
    -webkit-tap-highlight-color: transparent;
}

</style>
