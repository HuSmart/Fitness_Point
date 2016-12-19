<template>
  <div id="head">
    <pageHeader fixed :title="title">
      <mt-button icon="back" @click="fullBack" slot="left" v-if="back">返回</mt-button>
      <mt-button icon="more" @click="showMenu" slot="right" v-if="$store.state.more"></mt-button>
      <i class="fa fa-plus" aria-hidden="true" slot="right" v-if="false"></i> 
      <i class="fa fa-check" @click="check" aria-hidden="true" slot="right" v-if="$store.state.check"></i>
    </pageHeader>
    <mt-popup v-model="popupVisible" position="right" class="right-menu">
      <fit-menu :dlay="popupVisible"></fit-menu>
    </mt-popup>
  </div>
</template>

<script>
  import { Header } from 'mint-ui'
  import { Button } from 'mint-ui';
  import utils from '../lib/utils.js'
  import { Popup } from 'mint-ui';
  import Menu from './Menu.vue'

  export default {
    components: {
      'pageHeader': Header,
      'mt-button': Button,
      'mt-popup': Popup,
      'fit-menu': Menu
    },
    computed: {
      title() {
        return this.$store.state.title
      },
      back() {
        return this.$store.state.back
      }
    },
    methods: {
      fullBack() {
        const params = this.$store.state.selectedParams
        if (!utils.isEmptyObject(params) && !params.name) {
          this.$store.state.selectedParams = {}
        }
        window.history.go(-1)
      },
      showMenu() {
        this.popupVisible = true
      },
      check(){
        this.$store.dispatch('insertNewPlan').then(() => {
          this.$router.replace('/')
        })
      }
    },
    data() {
      return {
        popupVisible: false
      }
    }
  }
</script>

<style>
  #head {
    height: 2rem
  }
  .mint-popup-right{
    height: 100vh;
    width: 55vw;
    opacity:0.8;
  }
</style>