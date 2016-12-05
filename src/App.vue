<template>
  <div id="app">
    <pageHeader></pageHeader>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <tabbar></tabbar>
  </div>
</template>

<script>

import pageHeader from './components/PageHeader'
import tabbar from './components/Tabbar'
// import 
export default {
  name: 'app',
  components: {
    pageHeader,
    tabbar,
  },
  data(){
    return {
    }
  },
  mounted(){
  },
  watch: {
    '$route' (to, from) {
        if(to.path == "/") {
          this.$store.state.back = false
          this.$store.state.title = '请选择一个部位'
        }
    }
  }
}
</script>

<style>
  @import '~mint-ui/lib/style.css';
  .fade-enter-active,
  .fade-leave-active {
    transition: all .25s;
    transform: translateX(0%);
  }
  
  .fade-enter,
  .fade-leave-active {
    transform: translateX(-100%);
  }
</style>