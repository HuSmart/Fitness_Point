<template>
  <transition name="msgbox-edit">
    <div class="edit-recorde-wrapper" v-show="this.$store.state.show">
      
      <div class="edit-content">
        <mt-field type="number" :label="`重量(${this.$store.state.unit})`" placeholder="请输入使用的重量" v-model="params.item.weight"></mt-field>
        <mt-field type="number" :label="`次数(${this.$store.state.unit})`" placeholder="请输入进行的次数" v-model="params.item.count"></mt-field>
      </div>
      <mt-button class="edit-btn" type="primary" size="large" @click="save">保存修改</mt-button>
      <mt-button class="edit-btn" type="danger" size="large" @click="save">删除记录</mt-button>
    </div>
  </transition>
</template>
<script>
  import { Field } from 'mint-ui';
  import { Button } from 'mint-ui';

  export default {
    props: ['params'],
    components:{
      'mt-field': Field,
      'mt-button': Button,
    },
    data(){
      return {  
      }
    },
    methods: {
      save(){
        this.$store.dispatch('editActionRecording', this.params)
        this.$store.state.show = false
      }
    }
  }
</script>
<style>
  .edit-recorde-wrapper {
    z-index: 2001;
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate3d(-50%, -50%, 0);
    background: #fff;
    width: 85vw;
    height: 31vh;
    border-radius: 3px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: all .2s;
  }

  .edit-content{
    margin: 0 auto;
    width: 80vw;

  }

  .msgbox-edit-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  
  .msgbox-edit-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
  .edit-btn {
    width: 80vw;
    margin: 0 auto;
  }
</style>