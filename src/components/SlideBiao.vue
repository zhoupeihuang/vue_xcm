<template>
<div class="SlideBiao cf">
<div class="biaoTBAR"><i class="fa fa-star"></i> 福利产品</div>
<div class="biaoTitle">喜财神2017020097期</div>
<div class="biaolilv">12.88<b>%</b></div>
<div class="biaoms">
    <span class="ms1">期限90天 </span>
    <span class="ms2">累计加入23456人 </span>
    <span class="ms3">已拨56%</span>
</div>
<div class="biaoActivity cf">
<ul>
    <li><i class="fa fa-universal-access"></i> 投资超值兑，你选择我买单</li>
    <li><i class="fa fa-flash"></i> 投资满1000可每日签到，拼手气赢168元现金</li>
    <li v-show="shows"><i class="fa fa-flash"></i> 投资满2000可每日签到，拼手气赢268元现金</li>
    <li v-show="shows"><i class="fa fa-flash"></i> 投资满3000可每日签到，拼手气赢368元现金</li>
</ul>    
</div>
<div class="hands" @click="toggleS"> 4个活动 <i class="fa fa-caret-right"></i></div>
</div>
</template>
<script>
require('../assets/css/slidebiao.css')
export default {
    data () {
        return {
            msg:'love',
            shows:true
        }
    },
    methods:{
        toggleS:function(event){
            this.shows = (!this.shows);
        }
    }
}
</script>
 
