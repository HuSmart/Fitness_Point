<template>
  <div id="detail">
    <mt-button disabled size="large">{{action}}</mt-button>
    <mt-button disabled size="large">{{muscle}}</mt-button>
    <div class="desc">
      <textarea cols="30" rows="10" readonly>desc</textarea>
    </div>
    <mt-button type="primary" size="large" @click="buttonClick">开始这个训练</mt-button>
    <mt-button type="default" size="large" @click="editClick">编辑</mt-button>
    <mt-button type="danger" size="large">删除</mt-button>
    <edit-action></edit-action>
    <edit-mask></edit-mask>
    <muscle-picker></muscle-picke
  </div>
</template>
<script>
  import { Button } from 'mint-ui';

  import editAction from '../components/editAction.vue'
  import Mask from '../components/Mask.vue'
  import MusclePicker from '../components/MusclePicker.vue'

  export default {
    computed: {
    },
    data(){
      return {
        action: '',
        muscle: ''
      }
      
    },
    components:{
      'mt-button': Button,
      editAction,
      'edit-mask': Mask,
      MusclePicker
    },
    mounted(){
      this.$nextTick(function(){
        this.action = this.$route.params.action
        this.muscle = this.$store.state.title 
        this.$store.state.title = '训练介绍'
      })
    },
    methods:{
      buttonClick(){
        this.$store.state.title = this.action
        this.$router.push(`../recorde/${this.action}`)
      },
      editClick(){
        this.$store.state.show = true
      }
    }
  }
</script>
<style>
  #detail .mint-button {
    margin-top: 1rem;
  }
  
  .desc {
    width: 95%;
    margin: 1rem auto;
  }
  
  .desc textarea {
    width: 100%;
  }
</style>