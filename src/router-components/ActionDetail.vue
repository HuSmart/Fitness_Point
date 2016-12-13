<template>
  <div id="detail">
    <mt-button disabled size="large">{{this.params.name}}</mt-button>
    <mt-button disabled size="large">{{this.params.muscle}}</mt-button>
    <div class="desc">
      <textarea cols="30" rows="10" readonly>{{this.params.desc}}</textarea>
    </div>
    <mt-button type="primary" size="large" @click="buttonClick">开始这个训练</mt-button>
    <mt-button type="default" size="large" @click="editClick">编辑</mt-button>
    <mt-button type="danger" size="large">删除</mt-button>
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
        muscle: '',
        params: ''
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
        this.$store.state.selectedParams.muscle = this.$store.state.muscle
        this.$store.state.selectedParams.action = this.$route.params.action
        this.params = this.$store.getters.getActionDescript[0]
        this.params.muscle = this.$store.state.muscle
        this.$store.state.title = '训练介绍'
      })
    },
    methods:{
      buttonClick(){
        this.$store.state.title = this.params.name
        this.$router.push(`../recorde/${this.params.name}`)
      },
      editClick(){
        this.$store.state.selectedParams.muscle = this.params.muscle
        this.$store.state.selectedParams.action = this.params.action
        this.$router.push(`../edit/${this.params.name}`)
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