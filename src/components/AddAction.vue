<template>
  <div id="addAction">
    <mt-button size="large">{{this.params.action}}</mt-button>
    <mt-button size="large">{{this.$store.state.selectedParams.muscle}}</mt-button>
    <div class="desc">
      <textarea cols="30" rows="10">{{this.params.desc}}</textarea>
    </div>
    <mt-button type="primary" size="large" @click="buttonClick">保存</mt-button>
    <mt-button type="default" size="large" @click="editClick">取消</mt-button>
  </div>
</template>
<script>
  import { Button } from 'mint-ui';

  import Mask from '../components/Mask.vue'

  export default {
    computed: {
    },
    data(){
      return {
        params: {}
      }
    },
    components:{
      'mt-button': Button,
      'edit-mask': Mask,
    },
    mounted(){
      this.$nextTick(function(){
        this.$store.state.title = '编辑训练动作'
        this.params = this.$store.getters.getActionDescript[0]
      })
    },
    methods:{
      buttonClick(){
        console.log()
      },
      editClick(){
        this.$router.go(-1)
        // this.$store.state.show = true
      }
    }
  }
</script>
<style>
  #addAction .mint-button {
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