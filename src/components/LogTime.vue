<template>
 <div class="maxbox">
  <div class="fromline">
   <b> 日期：</b>
        <input type="date"  class="form-control"  v-model="date"  placeholder="Date" />
  </div>
  <div class="fromline">
   <b> 时间：</b>
        <input type="number"  class="form-control" v-model="totalTime" placeholder="Hours" />
  </div>
  <div class="fromline">
  <b> 备注：</b>
        <input type="text"  class="form-control"  v-model="comment"  placeholder="Comment" />
  </div>
  <div class="fromline">
       <button class="junBtn" @click="save()">保存</button>   
       <router-link to="/time-entries" class="junBtn">取消</router-link>
  </div>     
  </div>
 
</template>

<script>
  export default {
        name : 'LogTime',
        data() {
            return {
                date : '',
                totalTime : '',
                comment : ''
            }
        },
        methods:{
          save() {
            const plan = {
        	  	name:'peyton',
              image : 'https://avatars3.githubusercontent.com/u/11940742?v=3&s=460',
              date : this.date,
              totalTime : this.totalTime,
              comment : this.comment
            };
            this.$store.dispatch('savePlan', plan)
            this.$store.dispatch('addTotalTime', this.totalTime)
            this.$router.go(-1)
          }
        }
    }
</script>