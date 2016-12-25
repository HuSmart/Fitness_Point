<template>
  <div id="calendar">
    <div class="cov-date-body">
      <!--头部日期选择-->
      <div class="cov-date-monthly">
        <div class="cov-date-previous" @click="nextMonth('pre')"> < </div>
        <div class="cov-date-next" @click="nextMonth('next')"> > </div>
        <div class="cov-date-caption">
          <span @click="">{{checked.year}}年</span>
          <span @click="">{{displayInfo.month}}</span>
        </div>
      </div>
      <div class="cov-date-box">
        <div class="week">
          <ul>
            <li v-for="week of option.week">{{week}}</li>
          </ul>
        </div>
        <br>
        <div class="days" v-for="day, index of dayList"
          :class="{'isMonth':day.inMonth,'nowDay':day.checked,}"
        >
          <span @click="showRecarde(day)">{{day.value}}</span>
          <i class="fa fa-check-circle-o" aria-hidden="true" v-if="day.isRecorde"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import utils from '../../lib/utils.js'
  export default {
    props: {
      option: {
        type: Object,
        default() {
          return {
            type: 'day',
            SundayFirst: false,
            week: ['一', '二', '三', '四', '五', '六', '日'],
            month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            format: 'YYYY-MM-DD',
            color: {
              checked: '#F50057',
              header: '#3f51b5',
              headerText: '#fff'
            },
            overlayOpacity: 0.5,
            dismissible: true
          }
        }
      },
    },
    data() {
      function hours() {
        let list = []
        let hour = 24
        while (hour > 0) {
          --hour
          list.push({
            checked: false,
            value: hour < 10 ? '0' + hour : hour
          })
        }
      }
      function mins() {
        let list = []
        let min = 60
        while (min > 0) {
          --min
          list.push({
            check: false,
            value: min < 10 ? '0' + min : min
          })
        }
      }
      return {
        hours: hours(),
        mins: mins(),
        checked: {
          oldtime: moment(),
          currentMoment: null,
          year: '',
          month: '',
          day: '',
          hour: '00',
          min: '00'
        },
        displayInfo: {
          month: ''
        },
        library: {
          week: this.option.week,
          month: this.option.month,
          year: []
        },
        // dayList: [],
      }
    },
    computed: {
      time() {
        return new Date()
      },
      dayList(){
        return this.showDay()
      }
    },
    mounted() {
      this.$nextTick(function () {
        // this.showDay()
      })
    },
    methods: {
      nextMonth(...pre_or_next) {
        if(pre_or_next[0] === 'pre'){
          this.checked.currentMoment = moment(this.checked.currentMoment).subtract(1,'months')
        }else {
          this.checked.currentMoment = moment(this.checked.currentMoment).add(1,'months')
        }
        this.showDay('change')
      },
      showDay(...flag) {
        this.checked.currentMoment = flag[0] === 'change' ? this.checked.currentMoment : moment()
        this.checked.year = moment(this.checked.currentMoment).format('YYYY')
        this.checked.month = moment(this.checked.currentMoment).format('MM')
        this.checked.day = moment(this.checked.currentMoment).format('DD')
        this.displayInfo.month = this.library.month[moment(this.checked.currentMoment).month()]

        let days = []
        let currentMoment = this.checked.currentMoment
        // 当月第一天是第一周的第几天
        let firstDay = moment(currentMoment).date(1).day()
        let previousMouth = moment(currentMoment)
        let nextMonth = moment(currentMoment)
        // 上个月
        nextMonth.add(1, 'months')
        // 下个月
        previousMouth.subtract(1, 'months')
        // 判断当月有多少天
        let monthDays = moment(currentMoment).daysInMonth()
        let oldtime = this.checked.oldtime 
        // 处理当月的日期
        for (let i = 1; i <= monthDays; i++) {
          days.push({
            value: i,
            inMonth: true,
            unavailable: false,
            checked: false,
            moment: moment(currentMoment).date(i),
            isRecorde: false
          })
          if (i === Math.ceil(moment(currentMoment).format('D')) && moment(oldtime, this.option.format).year() === moment(currentMoment).year() && moment(oldtime, this.option.format).month() === moment(currentMoment).month()) {
            days[i-1].checked = true
          }
          // 给有训练记录的日期打上标识
          days[i-1].isRecorde = this.hasRecording(moment(currentMoment).date(i).format('YYYY-MM-DD'))
        }
        // 处理上月的
        for (let i = 0; i < firstDay-1; i++ ){
          let passiveDay = {
            value: previousMouth.daysInMonth() - (i),
            inMonth: false,
            action: 'previous',
            unavaliable: false,
            checked: false,
            moment: moment(currentMoment).date(1).subtract(i + 1, 'days')
          }
          days.unshift(passiveDay)
        }
        // 处理下月的
        for (let i = 1,finalDays = 42 - days.length; i <=  finalDays; i++){
          let passiveDay = {
            value: i,
            inMonth: false,
            action: 'next',
            unavailable: false,
            checked: false,
            moment: moment(currentMoment).add(1, 'months').date(i)
          }
          days.push(passiveDay)
        }
        // this.dayList = days
        return days
      },
      hasRecording(day) {
        const reList = this.$store.state.recordeList
        for (const action in reList){
          if (reList[action][day]){
            return true
          }
        }
        return false
      },
      showRecarde(day){
        this.$store.dispatch('getOneDayRecorde', moment(day.moment).format('YYYY-MM-DD'))
      }
    }
  }
</script>
<style>
  #mycalendar {
    width: 100vw;
  }
  .cov-date-body {
    width: 95vw;
    height: 45vh;
    margin: 0;
    padding: 0;
    position: fixed;  
    z-index: 1;
      
  }

  .cov-date-previous{
    float: left;
  }
  .cov-date-next{
    float: right;
  }
  .cov-date-caption{
    width: 150px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
  }
  .cov-date-caption span{
    color: red
  }
  .cov-date-box{
    height: 280px;
  }
  .week li{
    float: left;
    width: 20px;
    margin-left: 2rem;
    
  }
  ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px; 
  }
  .days{
    float: left;
    margin-left: 2rem;
    /*margin-bottom: 1rem;*/
    width: 20px;
    height: 3rem;
    text-align: center;
    /*box-sizing: border-box;*/
  }
  .isMonth{
    color: cadetblue
  }
  .nowDay > span{
    background: orangered;
    border-radius: 50%;
    color: white;
  }
  .days:not([class ~= "isMonth"]){
    color: #ccc;
  }
</style>