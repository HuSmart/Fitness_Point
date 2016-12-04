<template>
  <div id="detail">
    <mt-button disabled size="large">{{action}}</mt-button>
    <mt-button disabled size="large">{{muscle}}</mt-button>
    <div class="desc">
      <textarea cols="30" rows="10" readonly>desc</textarea>
    </div>
    <mt-button type="primary" size="large" @click="buttonClick">开始这个训练</mt-button>
    <mt-button type="default" size="large">编辑</mt-button>
    <mt-button type="danger" size="large">删除</mt-button>
  </div>
</template>
<script>
  import { Button } from 'mint-ui';
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
      'mt-button': Button
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