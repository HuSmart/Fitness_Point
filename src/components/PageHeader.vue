<template>
  <div id="head">
    <pageHeader fixed :title="title">
      <mt-button icon="back" @click="fullBack" slot="left" v-if="back">返回</mt-button>
      <mt-button icon="more" slot="right" v-if="more"></mt-button>
    </pageHeader>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
import { Button } from 'mint-ui';

export default {
  components:{
    'pageHeader': Header,
    'mt-button': Button
  },
  computed: {
    title(){
      return this.$store.state.title
    },
    back(){
      return this.$store.state.back
    },
    more(){
      return this.$store.state.more
    }
  },
  methods:{
    fullBack(){
      window.history.go(-1)
    }
  }
}
</script>

<style>
  #head{
    height: 2rem
  }
</style>