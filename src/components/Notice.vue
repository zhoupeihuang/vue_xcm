<template>
	<div class="NoticeBox" v-show="shows">
		{{noticeMsg}}
		<span class="closeB" @click="closeT">×</span>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				noticeMsg: '公告：关于托管平台新浪支付通信故障的公告',
				shows: true
			}
		},
		methods: {
			closeT: function(event) {
				// this.shows = (!this.shows);
				this.$ajax({
						method: 'get',
						url: 'http://180.97.83.236:2009/API_A/StudentMyHomePage_StudentInfo',
						params: {
							Token: 'GF1O8OjK6uriZJ9QCd8wUJkWM5F9ItvWeIVv3kG8Cllz05WLpFt07RxONhf0giQlB'
						}
					})
					.then(function(data) {
						console.log(data.request.response);
					})
					.catch(function(err) {
						console.log(err);
					});
			}
		}
	}
</script>
<style>
	.NoticeBox {
		height: 1.65rem;
		width: 16rem;
		line-height: 1.65rem;
		font-size: 0.55rem;
		color: #666;
		margin: 0 auto;
		position: relative;
		background-color: white;
		margin-bottom: 0.45rem;
		border-top: 1px #ddd solid;
		text-indent: 1rem;
	}
	
	.closeB {
		color: #ffffff;
		background-color: #ddd;
		height: 0.7rem;
		width: 0.7rem;
		border-radius: 0.5rem;
		display: inline-block;
		position: absolute;
		right: 1rem;
		top: 0.4rem;
		cursor: pointer;
		font-size: 0.5rem;
		line-height: 0.7rem;
		text-indent: 0;
		text-align: center;
	}
</style>