<template>
  <div id="app">
  
    	<slide></slide>
  	<barcontrol></barcontrol>
     <notice></notice>
    <myexclusive></myexclusive>
    <slideBiao></slideBiao>
  
    <router-view></router-view>
  </div>
</template>

<script>
import Slide from './components/Slide.vue'
import Barcontrol from './components/Barcontrol.vue'
import Myexclusive from './components/Myexclusive.vue'
import Notice from './components/Notice.vue'
import SlideBiao from './components/SlideBiao.vue'
require('./assets/js/moblieUtil.js')

export default {
  components:{
    'slide':Slide,
    'barcontrol':Barcontrol,
    'myexclusive':Myexclusive,
    'notice':Notice,
    'slideBiao':SlideBiao
  }
}
</script>
<style>
  #app{
    background-color: #f0f0f0;
  }
</style>
  