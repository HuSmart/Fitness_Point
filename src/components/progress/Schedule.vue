<template>
  <div id="schedule">
    <calendar></calendar>
    <dl>
      <template v-for="obj of Object.keys(recList)">
        <dt>{{obj}}</dt>
        <dd>
          <mt-cell v-for="item, index of recList[obj]" 
            :title="`#${index+1} ${ item.weight }${$store.state.unit} x ${ item.count }次数`">
          </mt-cell>
        </dd>
      </template>
    </dl>
  </div>
</template>
<script>
  import Calendar from './Calendar.vue'
  import { Cell } from 'mint-ui'

  export default {
    components: {
      Calendar,
      'mt-cell': Cell
    },
    computed: {
      recList(){
        return this.$store.state.progressList
      }
    }
  }
</script>
<style>
  #schedule dd{
    -webkit-margin-start: 0px;
  }
  #schedule > dl {
    top: 45vh;
    width: 95vw;
    position: fixed;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    height: calc(100% - 55vh);
  }
</style>