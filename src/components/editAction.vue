<template>
  <transition name="edit-action">
    <div class="edit-action-wapper" v-show="this.$store.state.show">
      <mt-field  placeholder="请输入动作名称"></mt-field>
      <!--<mt-button  size="large">腹肌</mt-button>-->
      <mt-field type="text" label="所属肌群" placeholder="请选择所属肌群" @focus.native="showSelecter"></mt-field>
      
      <mt-popup v-model="popupVisible" position="bottom">
        <muscle-picker class="selecter" :slots="slots" @change="onValuesChange"></muscle-picker>
        <mt-button type="primary" size="large" @click="">确定</mt-button>
        <mt-button type="default" size="large" @click="">取消</mt-button>
      </mt-popup>
    </div>
  </transition>
</template>
<script>
  import { Field } from 'mint-ui';
  import { Picker } from 'mint-ui';
  import { Popup } from 'mint-ui';
  import { Button } from 'mint-ui';

  export default {
    components:{
      'mt-field': Field,
      'mt-picker': Picker,
      'mt-popup': Popup,
      'muscle-picker': Picker,
      'mt-button': Button,
      // MusclePicker
    },
    data(){
      return {
        popupVisible: false,
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
      showSelecter(){
        this.popupVisible = true
      },
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
  .edit-action-wapper {
    z-index: 2001;
    margin: 0 auto;
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate3d(-50%, -50%, 0);
    background: #fff;
    width: 95vw;
    height: 40vh;
    border-radius: 3px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: all .2s;
  }
  .edit-action-wapper input{
    text-align: center;
  }
  .edit-action-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  
  .edit-action-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>