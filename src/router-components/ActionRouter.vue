<template>
    <div id="selectAction">
      <mt-cell v-for="action in actionList" :title="action.name" :to="`detail/${action.name}`" is-link>
        <img slot="icon" src="" width="24" height="24">
      </mt-cell>
    </div>
</template>
<script>
  import { Cell } from 'mint-ui';

  export default {
    data(){
      return {
        actionList: []
      }
    },
    mounted(){
      this.actionList = this.$store.state.actionList[this.$route.params.muscle]
      this.$store.state.back = true
      this.$store.state.title = this.$route.params.muscle
      // 存储 所选择的肌群
      this.$store.state.selectedParams.muscle = this.$route.params.muscle
    },
    computed:{
      muscle(){
        return this.$route.params.muscle
      }
    },
    components:{
      'mt-cell': Cell,
    }
  }
</script>
<style>
</style>