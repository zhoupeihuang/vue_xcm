<template>
	<div class="barControl" v-bind:class="[barDatas.length!=4?'bar5':'bar4']">
		<ul>
			<li v-for="bardata in barDatas">
				<router-link to="/sd" class="btn btn-danger"> 
				<span><i v-bind:class="bardata.imgurl"></i></span>
				<span>{{bardata.text}}</span>
				<span v-if="bardata.hotText">{{bardata.hotText}}</span>
				</router-link>
			</li>
		</ul>	
	</div>
</template>

<script>
	require('../assets/css/font-awesome.min.css')
	// var item = require ('./../assets/js/itemRoute.js')
    // import item from '../assets/js/itemRoute.js'
	export default { 
		data() {
			return {
				barDatas: [
					{ 'text': '新手指引', 'imgurl': 'fa fa-flag  ', 'hotText': '' },
					{ 'text': '推荐有礼', 'imgurl': 'fa fa-credit-card ', 'hotText': '热门' },
					{ 'text': '赢iphone7', 'imgurl': 'fa fa-mobile', 'hotText': '最新' },
					{ 'text': '积分商城', 'imgurl': 'fa fa-home ', 'hotText': '' },
					{ 'text': '会员中心', 'imgurl': 'fa fa-shield ', 'hotText': '' }
				]
			}
		}
	}
</script>
<style>
	.barControl{
		height:3.5rem;
		width:16rem;
		background-color: white;
		margin: 0 auto;
		
	}
	.bar4 li{
		width:4rem;
	}
	.bar5 li{
		width:3.2rem;
	}
	.barControl li{
		height: 2.5rem;
		padding:0.5rem 0;
		float: left;
		position: relative;
		font-size: 0.5rem;
		text-align: center;
	}
	.barControl li:nth-child(1) i{
		color: #fd5903;
	}
	.barControl li:nth-child(2) i{
		color: #fab321;
	}
	.barControl li:nth-child(3) i{
		color: #f23c4b;
	}
	.barControl li:nth-child(4) i{
		color: #16baf8;
	}
	.barControl li:nth-child(5) i{
		color: #3cd6d5;
	}
	.barControl li span,.barControl li i{
		position:absolute;
		text-align: center;
		word-break : break-all;
	}
	.barControl li i{
		height: 1.25rem;
		width:1.25rem;
	}
	.barControl li span:nth-child(1){
		font-size: 1.25rem;
		left: -0.625rem;
		margin-left: 50%;
		top: .5rem;
	}
	.barControl li span:nth-child(2){
		height: 0.5rem;
		width:2rem;
		font-size: 0.4rem;
		left: -1rem;
		margin-left: 50%;
		top: 1.8rem;
	}
	.barControl li span:nth-child(3){
		height: 0.5rem;
		width:1.25rem;
		font-size: 0.4rem;
		right: -0.625rem;
		margin-left: 50%;
		top: .4rem;
		background-color: #fd5903;
		border-radius: 0.3rem;
		color: white;
	}
 
</style>