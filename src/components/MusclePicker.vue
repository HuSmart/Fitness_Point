<!--肌群选择器-->
<template>
  <div class="musclePicker" v-show="this.$store.state.muscleSelecter">
    <muscle-picker class="selecter" :slots="slots" @change="onValuesChange"></muscle-picker>
    <mt-button type="primary" size="large" @click="">确定</mt-button>
    <mt-button type="default" size="large" @click="">取消</mt-button>
  </div>
</template>
<script>
  import { Picker } from 'mint-ui';
  import { Button } from 'mint-ui';
  
  export default {
    components: {
      'muscle-picker': Picker,
      'mt-button': Button,
    },
    data(){
      return {
        slots: [
          {
            flex: 1,
            values: this.$store.state.muscleList,
            className: 'slot1',
            textAlign: 'center',
          }
        ]
      }
    },
    methods: {
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          console.log(values)
          picker.setSlotValue(1, values[0]);
        }
      }
    }
  }
</script>
<style>
  .musclePicker{
    position: fixed;
    width: 95vw;
    bottom: 0;
    z-index: 2003;
    background: darkslateblue;
  }

  .selecter{
    /*height: 15vh*/
  }
</style>