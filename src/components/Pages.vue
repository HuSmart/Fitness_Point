<template>
  <div id="pages" class="page">
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="开始">
        <router-view></router-view>
      </mt-tab-container-item>
      <mt-tab-container-item id="健身计划">
        <mt-cell v-for="n in 5" title="tab-container 2">321</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="进度">
        <mt-cell v-for="n in 7" title="tab-container 3">456</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';

export default {
  props: ['active'],
  components:{
    't-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'mt-cell': Cell,
  }
}
</script>

<style>
  #pages{
    /*padding: 2rem 0;*/
  }
</style>