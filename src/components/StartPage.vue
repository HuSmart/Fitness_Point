<template>
  <div id="开始">
    <mt-cell v-for="muscle in muscles" 
      :title="muscle"
      :to="`action/${muscle}`"
      is-link

    >
    <i slot="icon" class="fa fa-sun-o" aria-hidden="true"></i>
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