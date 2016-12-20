<template>
  <div id="planDetail">
    <!--通过DL嵌套获取-->
    <!--<mt-cell v-for="action of actionList"
      :title="action"
      :to="`detail/${action}`" is-link
    >

    </mt-cell>-->
    <dl>
      <template v-for="item of Object.keys(actionList)">
        <dt>{{item}}</dt>
        <dd @click="setMuscle(item)">
          <mt-cell v-for="action of actionList[item]" :title="action" :to="`detail/${action}`" is-link>

          </mt-cell>
        </dd>
      </template>
    </dl>
  </div>
</template>
<script>
  import { Cell } from 'mint-ui'
  export default {
    components: {
      'mt-cell': Cell
    },
    computed: {
      actionList() {
        const list = this.$store.state.planList[this.$route.params.plan]
        // let result = []
        // for(const item in list){
        //   result = result.concat(list[item])
        // }
        // return result  
        return list
      }
    },
    methods: {
      setMuscle(item){
        this.$store.state.muscle = item
        this.$store.state.selected = '开始'
        
      }
    },
    mounted(){
      this.$store.state.back = true
    }
  }
</script>
<style>
  #planDetail dd{
    -webkit-margin-start: 0px;
  }
</style>