<template>
  <div id="items">
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" title="tab-container 1">123</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" title="tab-container 2">321</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
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
    'mt-cell': Cell
  }
}
</script>

<style>

</style>