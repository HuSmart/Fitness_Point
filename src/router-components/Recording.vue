<template>
  <div id="recording">
    <field placeholder="输入使用的重量"></field>
    <field placeholder="输入进行的次数"></field>
    <field placeholder="备注"></field>
    <mt-button type="primary" size="large">添加记录</mt-button>
  </div>
</template>
<script>
  import { Field } from 'mint-ui';
  import { Button } from 'mint-ui';

  export default {
    name: 'recored',
    components:{
      Field,
      'mt-button': Button
    },
    mothed(){
      
    }
  }
</script>
<style>
  #recording .mint-button{
    margin-top: 1rem
  }
</style>