<template>
  <div id="planHomePage">
      <mt-cell v-for="plan in plans" 
        :title="plan"
        :to="`PlanDetail/${plan}`"
        is-link

      >
      <i slot="icon" class="fa fa-superpowers" aria-hidden="true"></i>
    </mt-cell>
  </div>
</template>
<script>
  import { Cell } from 'mint-ui';
  export default {
    computed: {
      plans(){
        return Object.keys(this.$store.state.planList)
      }
    },
    components: {
      'mt-cell': Cell
    },
    mounted(){
      this.$nextTick(function(){
        this.$store.state.check = false 
        this.$store.state.more =true
      })
    }
  }
</script>
<style></style>