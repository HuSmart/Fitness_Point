<template>
  <transition name="edit-action">
    <div class="edit-action-wapper" v-show="this.$store.state.show">
      <mt-field label="动作名称" placeholder="请输入动作名称"></mt-field>
      <mt-field  type="text" label="所属肌群" placeholder="请选择所属肌群" @focus.native="showSelecter"></mt-field>
      <!--<muscle-picker></muscle-picker>-->
      <input type="text" @focus="showSelecter">
    </div>
  </transition>
</template>
<script>
  import { Field } from 'mint-ui';
  import { Picker } from 'mint-ui';
  // import MusclePicker from '../components/MusclePicker.vue'

  export default {
    components:{
      'mt-field': Field,
      'mt-picker': Picker,
      // MusclePicker
    },
    data(){
      return {
        
      }
    },
    methods: {
      showSelecter(){
        console.log('xxx')
        this.$store.state.muscleSelecter = true
      }
    }
  }
</script>
<style>
  .edit-action-wapper{
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

   .edit-action-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  
  .edit-action-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>