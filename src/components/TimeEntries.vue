<template>
  <div>
    <!--//`v-if`是vue的一个指令
    //`$route.path`是当前路由对象的路径，会被解析为绝对路径当
    //`$route.path !== '/time-entries/log-time'`为`true`是显示，`false`，为不显示。
    //to 路由跳转地址-->
    <div class="fromline">
    <router-link  class="junBtn" v-if="$route.path !== '/time-entries/log-time'" to="/time-entries/log-time"    >
      	创建
    </router-link>
    <div class="junBtn" v-if="$route.path === '/time-entries/log-time'">
      创建
    </div>
    </div>
    <hr>
    <router-view></router-view>
     <div class="fromline">
        <hr>
       <div class="junBtn"  v-if="!plans.length"><strong>还没有任何计划</strong></div>
     </div>

    <!--   
        v-for循环，注意参数顺序为(item,index) in items
     -->
        <a class="fromline" v-for="(plan,index) in plans">
            <!--`:src`属性，这个是vue的属性绑定简写`v-bind`可以缩写为`:`
             比如a标签的`href`可以写为`:href`
            并且在vue的指令里就一定不要写插值表达式了(`:src={{xx}}`)，vue自己会去解析
           -->
               <table border="1">
               <tr>
               <td><img :src="plan.avatar" class="avatar img-circle img-responsive" /></td>
               <td>{{ plan.name }}</td>
               <td>{{ plan.totalTime }}</td>
               <td>{{ plan.date }}</td>
               <td>{{ plan.comment }} </td>
               <td>
               <button class="junBtnL" @click="deletePlan(index)">X</button>
               </td>
               </tr>
               </table>
        </a>

  </div>
</template>
<script>
require('../assets/css/index.css')
    export default {
        name : 'TimeEntries',
        computed : {
          plans () {
            // 从store中取出数据
            return this.$store.state.list
          }
        },
        methods : {
          deletePlan(idx) {
            // 减去总时间
            this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
            // 删除该计划
            this.$store.dispatch('deletePlan',idx)
          }
        }
    }
</script>
<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>