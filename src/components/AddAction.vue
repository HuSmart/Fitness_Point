<template>
  <div id="addAction">
    <!--this.params.name 就是action——动作的名称-->
    <mt-button size="large" @click="editName">{{this.params.name}}</mt-button>
    <mt-button size="large" @click="selectMuscle">{{this.params.muscle}}</mt-button>
    <div class="desc">
      <textarea cols="30" rows="10" v-model="params.desc"></textarea>
      <input type="a">
    </div>
    <mt-button type="primary" size="large" @click="saveEdit">保存</mt-button>
    <mt-button type="default" size="large" @click="editClick">取消</mt-button>
    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker  class="select-muscle-wapper" :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
  import { Button } from 'mint-ui';
  import {MessageBox} from 'mint-ui';
  import { Popup } from 'mint-ui'
  import { Picker } from 'mint-ui'

  import Mask from '../components/Mask.vue'

  export default {
    computed: {
    },
    data(){
      return {
        params: {},
        popupVisible: false,
        slots: [
          {
            flex: 1,
            values: this.$store.state.muscleList,
            className: 'slot1',
            textAlign: 'center',
          }
        ]
      }
    },
    components:{
      'mt-button': Button,
      'edit-mask': Mask,
      'mt-popup': Popup,
      'mt-picker': Picker
    },
    mounted(){
      this.$nextTick(function(){
        this.$store.state.title = '编辑训练动作'
        this.params = this.$store.getters.getActionDescript[0]
        this.params.muscle = this.$store.state.selectedParams.muscle
      })
    },
    methods:{
      editName(){
        MessageBox.prompt('请输入动作的名称') 
          .then(({value, action}) => {
            this.params.name = value
          })
          .catch(() => console.log('取消'))
      },
      selectMuscle(){
        // 显示肌群选择器
        this.popupVisible = true
      },
      saveEdit(){
        this.$store.dispatch('setActionDetail', this.params)
      },
      editClick(){
        this.$router.go(-1)
        // this.$store.state.show = true
      },
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.params.muscle = values[0]
      }
    }
  }
</script>
<style>
  #addAction .mint-button {
    margin-top: 1rem;
  }
  
  .desc {
    width: 95%;
    margin: 1rem auto;
  }
  
  .desc textarea {
    width: 100%;
  }

  .select-muscle-wapper{
    width: 95vw;

  }
</style>