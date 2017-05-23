<template>
   
  <div class="Myexclusive">
    <div class="exclusiveTitle"><img :src="imgurl" width="auto" height="25px" alt=""><br> 张先生</div>
   <router-link to="/time-entries"> <div class="exclusiveMain" v-for="slidePage in slidePages">
      <span class="ytitle">{{slidePage.ytitle}}</span>
      <span class="ytext">{{slidePage.ytext}}</span>
      <span class="yimg"><img :src="slidePage.yimg" alt=""></span>
    </div></router-link>  
  </div>
  <!--<h1>任务追踪</h1>
    <p>
      <strong>
        <router-link to="/time-entries">创建一个任务</router-link>
      </strong>
    </p>-->
</template>
<script>
  const imgA = require('../assets/images/aa.png')
  const imgB = require('../assets/images/naoyuanxiao.png')
  export default {
    data() {
      return {
        title: '我的专属',
        imgurl2: './src/assets/images/aa.png',
        imgurl: imgA,
        slidePages: [{
          ytitle: '【闹元宵 惠情人】',
          ytext: '全场加息1%',
          yimg: imgB
        }],
      }
    }
  }

</script>
<style>
  .Myexclusive {
    background-color: white;
    height: 3.5rem;
    width: 16rem;
    margin: 0.45rem auto;
  }
  
  .exclusiveTitle {
      height: 2rem;
      margin: 0.75rem 0;
      padding-top: 0.75rem;
      width: 4.25rem;
      border-right: 1px #ddd solid;
      font-size: 0.5rem;
      color: #ff5655;
      text-align: center;
      float: left;
  }
  .exclusiveMain{
      width: 11.5rem;
      height: 3.5rem;  
      float: left;
      position: relative;
  }
  .exclusiveMain span{
      position: absolute;
  }
  .ytitle{
      left: 0rem;
      top: 0;
      font-size: 0.4rem;
      color: #fd5903;
      width: 3.4rem;
      height: 1.7rem;
      line-height: 2.5rem;
      text-align: center;
  }
  .ytext{
      left: 0rem;
      top: 1.8rem;
      font-size: 0.5rem;
      color: #333;
      width: 3.4rem;
      height: 1.7rem;
      line-height: .7rem;
      text-align: center
  }
  .yimg{
      right: 0rem;
      top: 0;
      width: 7.98rem;
      height: 3.5rem;
  }
  .yimg img{
    height: 3.5rem;
    width: auto;
  }

</style>
