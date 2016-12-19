<template>
  <div id="PlanActionList">
    <mt-checklist :title="muscle" v-model="$store.state.planAction" :options="actions">
    </mt-checklist>
  </div>
</template>
<script>
  import { Checklist } from 'mint-ui';

  export default {
    components: {
      'mt-checklist': Checklist
    },
    computed: {
      muscle(){
        return this.$route.params.muscle
      },
      actions(){
        const list = this.$store.state.actionList[this.muscle]
        let result = []
        for(const action of list){
          result.push(action.name)
        }
        return result
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.$store.state.selectedParams.muscle = this.muscle
        this.$store.state.check = true
        this.$store.state.more = false
      })
    }

  }
</script>