<template>
<div>
<div class="inner">
	<h1>{{data.title}}</h1>
	<img :src="data.cover.url">
	<p class="them">{{data.card_subtitle}}</p>
	<p class="actors">演员：<span v-for="(item, index) in data.actors" :key="'actors' + index">{{item}}&nbsp;&nbsp;</span></p>
	<p class="directors">主演：<span v-for="(item, index) in data.directors" :key="'dir' + index">{{item}}&nbsp;</span></p>
	<p class="keywords"><span v-for="(item, index) in data.info.split('/')" :key="index">{{item}}</span></p>
</div>
<Comment></Comment>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss" scoped>
.inner {
	font-size: 14px;
	color: #666;
	padding: 10px;
	h1 {
		padding-bottom: 20px;
	}
	img {
		padding-left: 20px;
		float: right;
		width: 30%;
	}
	p {
		line-height: 30px;
		padding-bottom: 10px;
		&.directors {
			font-size: 16px;
			color: #000;
		}
		&.keywords{
			display: flex;
			flex-wrap: wrap;
			span {
				margin-bottom: 10px;
				margin-right: 10px;
				border: 1px solid green;
				padding: 0px 10px;
				border-radius: 20px;
			}
		}
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
				.get('/data/movielist.json', {
					// query数据
					params: {
						id: this.$route.params.id
					}
				})
				// 监听数据返回
				.then(({ data }) => {
					let arr = [];
					let id = this.$route.params.id;
					for(let out in data){
						for(let inner in data[out]) {
							arr = arr.concat(data[out][inner].subject_collection_items);
						}
					}
					let result = arr.find(function(value){
						return value.id == id;
					});
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