<template>
  <div id="app">
    <pageHeader fixed></pageHeader>  
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
  }
}
</script>

<style>
  @import '~mint-ui/lib/style.css';
</style>