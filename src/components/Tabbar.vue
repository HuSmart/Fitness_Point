<template>
  <div id="tabbar">
    <mt-tabbar v-model="selected" @click.native="handleClick">
      <mt-tab-item id="外卖">
        <img slot="icon" src=""> 外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src=""> 订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src=""> 发现
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

</style>