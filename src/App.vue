<template>
  <div id="app">
    <pageHeader></pageHeader>
      <router-view></router-view>
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
    this.$store.dispatch('initAllRecording')
    this.$store.dispatch('initAllAction')

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
</style>