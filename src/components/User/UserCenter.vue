<template>
  <div id="UserCenter">
    <div class="user-center-body">
      <div class="user-center-body">
        <div class="user-center-top">
          <div class="user-top-head">
            <img src="../../assets/img/1501131U1-8.jpg" alt="">
          </div>
          <div class="user-top-name">
            <span>Merry</span>
          </div>
        </div>
        <div>
          <msg-item v-for="n of 5"></msg-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Item from './MessageItem.vue'
  export default {
    components: {
      'msg-item': Item
    }
  }
</script>
<style>
  .user-center-top {
    padding: 1rem;
    box-shadow: 0 2px 2px  rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
  }
  .user-top-head {
    margin: 3rem auto 0 auto;
    width: 7rem;
    height: 7rem;
  }
  .user-top-head > img{
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
  }
  .user-top-name {
    /*display: inline-block;*/
    margin: 1rem auto;
    width: 10rem;    
  }
  .user-top-name > span{
    text-align: center;
    display: inline-block;
    width: 10rem;
  }
</style>