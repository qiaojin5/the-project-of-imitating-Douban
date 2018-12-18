<template>
<div>
<div class="inner">
	<h1>{{data.title}}</h1>
	<img :src="data.cover.url">
	<p>{{data.card_subtitle}}</p>
	<p>作者：{{data.author[0]}}</p>
	<div class="clearfix"></div>
</div>
<Comment></Comment>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss" scoped>
.inner {
	padding: 0 20px;
	h1 {
		margin-bottom: 20px;
	}
	img {
		float: right;
		width: 30%;
		margin-left: 10px;
	}
	.clearfix {
		clear: both;
	}
}
</style>
<script type="text/javascript">
import Comment from './Comment.vue';
export default {
    components: { Comment },
	data() {
		return {
			data: []
		}
	},
	watch: {
		$route() {
			// 更新数据
			this.dataUpdate();
		}
	},
	methods: {
		// 更新数据的方法
		dataUpdate() {
			this.$http
				// get请求
				.get('/data/book_bottom_list.json', {
					// query数据
					params: {
						id: this.$route.params.id
					}
				})
				// 监听数据返回
				.then(({ data }) => {
					let arr = [];
					let id = this.$route.params.id;
					for(var i in data) {
						arr = arr.concat(data[i])
					}
					let result = arr.find(function(val) {
						return val.id == id;
					})
					this.data = result;
				})
		}
	},
	// 组件创建完成时候请求数据
	created() {
		// 更新数据
		this.dataUpdate();
	}
}
</script>