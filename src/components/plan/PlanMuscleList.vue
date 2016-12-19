<template>
  <div id="PlanMuscleList">
    <mt-cell v-for="muscle in muscles" 
      :title="muscle"
      :to="`planSelect/${muscle}`"
      is-link

    >
    <i slot="icon" class="fa fa-superpowers" aria-hidden="true"></i>
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