<template>
  <div id="开始">
    <mt-cell v-for="muscle in muscles" 
      :title="muscle"
      :to="`action/${muscle}`"
      is-link

    >
    <img slot="icon" src="" width="24" height="24">
    </mt-cell>
  </div>
</template>
<script>
  import { Cell } from 'mint-ui';

  export default {
    data(){
      return {
        muscles: []
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.muscles = this.$store.state.muscleList
      })
    },
    components:{
      'mt-cell': Cell,
    }
  }
</script>
<style></style>