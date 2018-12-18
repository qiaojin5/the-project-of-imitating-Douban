<template>
<div>
	<div class="search">
		<input type="text" @keyup.enter="searchValue" v-model="search" placeholder="请输入搜索关键词">
	</div>
	<div class="content">
		<div class="maintype" v-for="(item, index) in data" :key="index">
			<div class="head">
				<h3>{{item.subject_collection.name}}</h3>
				<div class="more">更多</div>
			</div>
			<MovieList :data="item.subject_collection_items"></MovieList>
		</div>
	</div>
	<div class="container">
		<p>分类浏览</p>
		<ul class="type-list">
			<li v-for="(item, index) in browse" :key="index">
				<router-link tag="a" :to="'/MovieBroews/' + item.id + 'B' + item.title">{{item.title}}</router-link>
				<span class="arrow">
					<span class="arrow white"></span>
				</span>
			</li>
		</ul>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
//箭头混合
@mixin arrow($w: 10px, $color: #000, $dir: top) {
	// 兼容行内和块
	width: 0;
	font-size: 0;
	border: $w solid transparent;
	border-#{$dir}-color: $color;
}
.search {
	background: #fff;
	padding: 10px 20px;
	display: flex;
	position: fixed;
	width: 100%;
	top: 61px;
	z-index: 7;
	box-sizing: border-box;
	input {
		flex: 1;
		padding: 8px 20px;
		height: 20px;
		line-height: 20px;
		background: #efefef;
		border-radius: 18px;
		border: none;
		outline: none;
	}
}
.content {
	padding-top: 40px;
}
.maintype {
	height: 270px;
	overflow: hidden;
}
.head {
	display: flex;
	height: 60px;
	line-height: 60px;
	h3 {
		flex: 9;
		font-size: 20px;
		padding-left: 10px;
	}
	.more {
		flex: 1;
		color: green;
		font-size: 14px;
		margin-right: 20px;
	}
}
.container p {
	font-size: 24px;
	height: 50px;
	line-height: 50px;
	padding-left: 10px;
}
ul.type-list {
	padding: 0px 10px;
	li {
		width: 50%;
		float: left;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		padding-left: 10px;
		position: relative;
		&:first-child, &:nth-child(2) {
			border-top: 1px solid #ccc;
		}
		&:nth-child(2n) {
			border-right: none;
		}
		a {
			text-decoration: none;
			display: block;
			color: #42bd56;
		}
		.arrow {
			@include arrow(10px, #ccc, left);
			position: absolute;
			top: 15px;
			right: 4px;
			.white {
				position: absolute;
				top: -10px;
				right: -7px;
				border-left-color: #fff;
			}
		}
	}
}
</style>
<script>
//引入组件
import MovieList from './MovieList.vue';
export default {
	data () {
		return {
			data : '',
			search : '',
			browse : [
				{title: "经典", id: "classic"},
				{title: "冷门佳片", id: "underrated"},
				{title: "豆瓣高分", id: "doubantop"},
				{title: "动作", id: "action"},
				{title: "喜剧", id: "comedy"},
				{title: "爱情", id: "love"},
				{title: "悬疑", id: "mystery"},
				{title: "恐怖", id: "horror"},
				{title: "科幻", id: "scifi"},
				{title: "治愈", id: "sweet"},
				{title: "文艺", id: "artfilm"},
				{title: "成长", id: "youth"},
				{title: "动画", id: "animation"},
				{title: "华语", id: "chinese"},
				{title: "欧美", id: "western"},
				{title: "韩国", id: "korean"},
				{title: "日本", id: "japanese"}
			]
		}
	},
	//注册组建
	components : { MovieList },
	created() {
		this.$http
		.get("/data/movie.json")
		.then(({ data }) => {
			this.data = data;
		})
	},
	//定义方法
	methods: {
		searchValue() {
			// console.log(this.search);
			window.location.href = "http://localhost:8080/MovieHome#/MovieBroews/" + this.search;
		}
	}
}
</script>

