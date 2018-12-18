<template>
<ul class="count">
	<li v-for="(item, index) in data" :key="index">
		<router-link class="item" tag="div" :to="'/MovieDetail/' + item.id" :data="item.id">
			<img :src="item.cover.url" alt="">
			<p>{{item.title}}</p>
			<div class="rate">
				<!-- <el-rate  disabled v-model="item.rating.value"></el-rate> -->
				<el-rate  disabled v-model="item.rating.value"></el-rate>
				<span>{{item.rating.value * 2}}</span>
			</div>
		</router-link>
	</li>
</ul>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss" scoped>
.count {
	display: flex;
	list-style: none;
	width: 100%;
	overflow-x: auto;
	li {
		flex: 1;
		width: 100px;
		height: 200px;
		margin: 8px;
		img {
			display: block;
			width: 100px;
			height: 140px;
		}
		p {
			width: 100%;
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-size: 14px;
			color: #111;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.rate {
			display: flex;
			width: 100%;
			el-rate {
				flex: 8;
			}
			span {
				flex: 1;
				width: 20%;
				color: #999;
				font-size: 14px;
			}
		}
	}
}
</style>
<script type="text/javascript">
export default {
	props : ["data"],
	watch: {
		
	}
}
</script>