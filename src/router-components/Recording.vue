<template>
  <div id="recording">
    <div class="headPart">
      <field placeholder="输入使用的重量" v-model="weight"></field>
      <field placeholder="输入进行的次数" v-model="count"></field>
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
            value="带链接">
          </mt-cell>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  import { Field } from 'mint-ui';
  import { Button } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import { Cell } from 'mint-ui';

  import  Utils  from '../lib/utils.js'

  Vue.use(InfiniteScroll);

  export default {
    name: 'recordePage',
    components:{
      Field,
      'mt-button': Button,
      'mt-cell': Cell
    },
    mothed(){
      
    },
    data(){
      return {
        weight: '',
        count: '',
        remark: '',
        loading: false
      }
    },
    computed: {
      list(){
        let data = this.$store.state.recordeList[Utils.getDate()]
        if(data){
          return data[this.$store.state.title] || []
        }else{
          return []
        }
      }
    },
    methods: {
      addCorde(){
        let action = this.$store.state.title
        // 如果当天没有该动作的记录就初始化
        this.$store.state.recordeList[Utils.getDate()] = 
          this.$store.state.recordeList[Utils.getDate()] || {}

        this.$store.state.recordeList[Utils.getDate()][action] = 
          this.$store.state.recordeList[Utils.getDate()][action] || []
        if (!this.weight || !this.count){
          MessageBox('提示','重量和次数不能为空')
          return 
        }
        let item = {
          'weight': this.weight,
          'count': this.count,
          'remark': this.remark
        }
        this.$store.state.recordeList[Utils.getDate()][action].push(item)
        this.list.push(item)
        this.weight = ''
        this.count = ''
        // ....处理..
      },
      loadMore() {
        this.loading = true;
        // setTimeout(() => {
        //   let last = this.list[this.list.length - 1];
        //   for (let i = 1; i <= 10; i++) {
        //     this.list.push(last + i);
        //   }
        //   this.loading = false;
        // }, 2500);
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
</style>