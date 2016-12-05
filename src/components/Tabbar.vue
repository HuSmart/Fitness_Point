<template>
  <div id="tabbar">
    <mt-tabbar fixed v-model="selected" @click.native="handleClick">
      <mt-tab-item id="开始">
        <img slot="icon" src=""> 开始
      </mt-tab-item>
      <mt-tab-item id="健身计划">
        <img slot="icon" src=""> 健身计划
      </mt-tab-item>
      <mt-tab-item id="进度">
        <img slot="icon" src=""> 进度
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src=""> 我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';

export default {
  components:{
    'mt-tabber': Tabbar,
    'mt_tabitem': TabItem,
  },
  mounted(){
    this.selected = this.$store.state.selected
  },
  data(){
    return {
      selected: ''
    }
  },
  computed:{
  },
  methods: {
    handleClick(){
      this.$store.state.selected = this.selected
    }
  }
}
</script>

<style>
  #tabbar{
    height: 3rem
  }
</style>