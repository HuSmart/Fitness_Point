<template>
  <div id="recording">
    <div class="headPart">
      <field type="number" placeholder="输入使用的重量" v-model="weight"></field>
      <field type="number" placeholder="输入进行的次数" v-model="count"></field>
      <field placeholder="备注" v-model="remark"></field>
      <mt-button type="primary" size="large" @click="addCorde">添加记录</mt-button>
    </div>
    <div class="recordePart">
      <ul v-infinite-scroll="loadMore" style="margin:0;padding:0"
      infinite-scroll-disabled="loading" 
      infinite-scroll-distance="10">
        <li v-for="(item, index) in list">
          <mt-cell 
            :title="`#${index+1} ${ item.weight }${$store.state.unit} x ${ item.count }次数`" 
            is-link 
            @click.native="showDetail(item,index)"
            value="编辑"
          >
          </mt-cell>
        </li>
      </ul>
    </div>
    <!--Edit-->
    <edit-wrapper :params="params"></edit-wrapper>
    <edit-mask></edit-mask>
  </div>
</template>
<script>
  import Vue from 'vue'

  import { Field } from 'mint-ui';
  import { Button } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import { Cell } from 'mint-ui';
  
  
  import EditRecorde from '../components/editRecorde.vue'
  import Mask from '../components/Mask.vue'


  import  Utils  from '../lib/utils.js'

  Vue.use(InfiniteScroll);

  export default {
    name: 'recordePage',
    components:{
      Field,
      'mt-button': Button,
      'mt-cell': Cell,
      'edit-wrapper': EditRecorde,
      'edit-mask':Mask
    },
    mothed(){
      
    },
    data(){
      return {
        weight: '',
        count: '',
        remark: '',
        loading: false,
        params: {
          item:{
            'weight':'',
            'count': ''
          }
        }
      }
    },
    computed: {
      list(){
        let action = this.$store.state.title
        let nowDayTime = Utils.getDate()
        this.$store.dispatch('initActionRecording')
        return this.$store.state.recordeList[action][nowDayTime]
      }
    },
    methods: {
      addCorde(){
        if (!this.weight || !this.count){
          MessageBox('提示','重量和次数不能为空')
          return 
        }
        if(this.list.length ==0 ){

        }
        let item = {
          'weight': this.weight,
          'count': this.count,
          'remark': this.remark
        }
        this.$store.dispatch('addActionRecording', item)
        this.weight = ''
        this.count = ''
      },
      loadMore() {
        this.loading = true;

      },
      showDetail(item, index){
        this.params = {
          'item': item,
          'index': index
        }
        this.$store.state.show = true
      },
    }
  }
</script>
<style>
  #recording .mint-button {
    margin-top: 1rem
  }
  
  li {
    list-style-type: none;
  }
  
  .headPart {
    position: fixed;
    width: 95vw;
    height: 200px;
  }
  
  .recordePart {
    position: fixed;
    margin-top: 200px;
    width: 95vw;
    height: calc(100% - 300px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  
  ::-webkit-scrollbar {
    display: none
  }
  
  
</style>