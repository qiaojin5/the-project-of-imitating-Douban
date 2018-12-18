<template>
	<!-- 可以点击，所以用导航元素来创建 -->
	<router-link class="item" tag="div" :to="'/MusicDetail/' + classify + '/' +data.id">
		<div class="container">
			<img :src="'/pic/'+data.img" alt="">
			<div class="intro">
				<h3>{{data.title}}</h3>
				<div class="rating">{{(Math.round((data.rating)*10)/10).toFixed(1)}}</div>
				<p>{{data.info}}</p>
			</div>
		</div>	
	</router-link>
</template>

<style type="text/css" lang="scss" scoped>
@import '../base.scss';
.container {
	height: 100px;
	padding: 20px 10px;
	border-bottom: 1px solid #F5F5F5;
	display: flex;
	img {
	display: block;
	width: 100px;
	height: 100px;
	margin-right: 15px;
	}
	.intro {
		flex: 1;
		h3 {
			margin-top: 3px;
			font-size: 18px;
			color: #484848;
		}
		.rating, p {
			font-size: 12px;
			line-height: 22px;
			color: #B3B3B3;
		}
	}
}
</style>


<script type="text/javascript">
	export default {
		
		props: ['data', 'classify'],
		created() {
			// console.log(this)

		}
	}
	




</script>