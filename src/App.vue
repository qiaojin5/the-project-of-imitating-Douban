<template>
<div>
	<header>
		<router-link to="/DoubanHome" class="douban" tag="div">豆瓣</router-link>
		<router-link to="/MovieHome" class="movie" tag="div">电影</router-link>
		<router-link to="/BookHome" class="book" tag="div">读书</router-link>
		<router-link to="/MusicHome" class="music" tag="div">音乐</router-link>
	</header>
	<div class="clearfix"></div>
  <!-- 第二步 定义路由渲染位置 -->
  <router-view></router-view>
</div>
</template>
<style type="text/css" lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
header {
	height: 60px;
	width: 100%;
	line-height: 60px;
	text-align: center;
	font-size: 16px;
	display: flex;
	position: fixed;
	z-index: 100;
	top: 0;
	border-bottom: 1px solid #ccc;
	background-color: #fff;
	.douban {
		flex: 2;
		font-weight: 700;
		color: #00b900;
		font-size: 24px;
	}
	.movie {
		color: #23bbff;
		flex: 3;
	}
	.book {
		color: #fa0;
		flex: 3;
	}
	.music {
		color: #f33;
		flex: 3;
	}
}
.clearfix {
	margin-top: 60px;
	height: 0px;
	width: 100%;
	font-size: 0px;
}
</style>
<script>

</script>

