<template>
  <div id="pages" class="page">
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="开始" >
        <transition name="start-wapper" mode="out-in">
          <router-view name="start"></router-view>
        </transition>
      </mt-tab-container-item>
      <mt-tab-container-item id="健身计划">
        <transition name="start-wapper" mode="out-in">
          <router-view name="plan"></router-view>
        </transition>
      </mt-tab-container-item>
      <mt-tab-container-item id="进度">
        <my-calendar></my-calendar>
        <!--<mt-cell v-for="n in 7" title="tab-container 3">456</mt-cell>-->
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 7" title="tab-container 3">456</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';

import Calendar from '../components/progress/Calendar'

export default {
  props: ['active'],
  components:{
    't-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'mt-cell': Cell,
    'my-calendar': Calendar
  }
}
</script>

<style>
  #pages {
  }

  .start-wapper-enter-active,
  .start-wapper-leave-active {
    transition: opacity .3s
  }
  
  .start-wapper-enter,
  .start-wapper-leave-active {
    opacity: 0
  }
</style>