<template>
  <div id="head">
    <pageHeader fixed :title="title">
      <router-link to="/" slot="left" v-if="back">
        <mt-button icon="back">返回</mt-button>
      </router-link>
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
  }
}
</script>

<style>

</style>