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
    <div class="v-modal bacg" style="z-index:2000;" :class="{bbb:this.$store.state.show}" @click="exit"></div>
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


  import  Utils  from '../lib/utils.js'

  Vue.use(InfiniteScroll);

  export default {
    name: 'recordePage',
    components:{
      Field,
      'mt-button': Button,
      'mt-cell': Cell,
      'edit-wrapper': EditRecorde
    },
    mothed(){
      
    },
    data(){
      return {
        weight: '',
        count: '',
        remark: '',
        loading: false,
        isinit:true,
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
        let arr = Utils.getCurrentAction(this.$store.state.recordeList[this.$store.state.title] || {})
        if (arr.length != 0){
          this.isinit = false
        }
        return arr
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
        if(this.isinit) this.list.push(item) 
        // 
        this.weight = ''
        this.count = ''
        // ....处理..
      },
      loadMore() {
        this.loading = true;

      },
      showDetail(item, index){
        // MessageBox('提示', '操作成功');
        this.params = {
          'item': item,
          'index': index
        }
        this.$store.state.show = true

      },
      exit(){
        this.$store.state.show = false
      }
    }
  }
</script>
<style>
  #recording .mint-button {
    margin-top: 1rem
  }
  
  li {
    list-style-type: none;
    /*margin-bottom: 1rem;*/
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
  .bacg{
    display: none
  }
  .bbb{
    display: block
  }
  
</style>