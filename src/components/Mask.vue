<template>
  <div class="v-modal bacg" style="z-index:2000;" :class="{bbb:this.$store.state.show}" @click="exit"></div>
</template>
<script>
  export default {
    methods: {
      exit(){
        this.$store.state.show = false
      }
    }
  }
</script>
<style>
  .bacg {
    display: none
  }
  
  .bbb {
    display: block
  }
</style>