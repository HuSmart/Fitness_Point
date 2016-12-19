<template>
  <div id="tabbar">
    <mt-tabbar fixed v-model="$store.state.selected" @click.native="handleClick">
      <mt-tab-item id="开始">
        <i slot="icon" class="fa fa-play" aria-hidden="true"></i> 开始
      </mt-tab-item>
      <mt-tab-item id="健身计划">
        <i slot="icon" class="fa fa-map-signs" aria-hidden="true"></i> 健身计划
      </mt-tab-item>
      <mt-tab-item id="进度">
        <i slot="icon" class="fa fa-calendar-check-o" aria-hidden="true"></i> 进度
      </mt-tab-item>
      <mt-tab-item id="我的">
        <i slot="icon" class="fa fa-user" aria-hidden="true"></i> 我的
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
    
  },
  data(){
    return {
    }
  },
  computed:{
  },
  methods: {
    handleClick(){
      const key = this.$store.state.selected
      switch (key){
        case '开始':
          this.$store.state.title = '选择一个部位进行锻炼'
          break
        case '健身计划':
          this.$store.state.title = "健身计划"
          break
        case '进度':
          this.$store.state.title = '训练进度'
          break
        case '我的':
          this.$store.state.title = "个人中心"
          break
      }
    }
  }
}
</script>

<style>
  #tabbar{
    height: 3rem
  }
</style>