<template>
<div class="container">
	<h2>{{typename}}</h2>
	<div class="list">
		<router-link v-for="(item, index) in data" 
		:key="index" tag="li" :to="'/MovieDetail/' + item.id" :data="item.id">
			<img :src="item.cover.url" alt="">
			<div class="actions" v-show="enbleAction(item.actions)">可播放</div>
			<p>{{item.title}}</p>
			<div class="rate">
				<el-rate disabled v-model="item.rating.value"></el-rate>
				<span>{{item.rating.value * 2}}</span>
			</div>
		</router-link>
	</div>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
h2 {
	height: 50px;
	line-height: 50px;
	font-size: 24px;
	font-weight: 500;
	color: #111;
	padding-top: 20px;
	padding-bottom: 10px;
	width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.list {
	li {
		border: none;
		float: left;
		width: 33%;
		height: 200px;
		box-sizing: border-box;
		padding: 10px;
		position: relative;
		img {
			display: block;
			width: 100%;
			height: 130px;
		}
		p {
			width: 100%;
			height: 30px;
			line-height: 30px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			text-align: center;
			font-size: 14px;
			color: #111;
			padding: 0;
		}
		.rate {
			display: flex;
			width: 100%;
			el-rate {
				flex: 6;
			}
			span {
				flex: 1;
				width: 20%;
				color: #999;
				font-size: 14px;
			}
		}
		.actions {
			position: absolute;
			top: 117px;
			right: 13px;
			width: 33px;
			height: 15px;
			font-size: 10px;
			color: #fff;
			border-radius: 3px;
			padding: 0 3px;
			background-color: #f5a623;
			border: 1px solid #fff;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			data: {},
			typename : "",
			//隐藏数据
			others : {},
			lock : true
		}
	},
	watch: {
		// 路由更新则更新数据
		$route() {
			this.dataUpdate();
		}
	},
	mounted() {
		//页面滚动事件
		document.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		// 更新数据的方法
		dataUpdate() {
			this.$http
				// 获取数据
				.get('/data/movielist.json', {
					params: {
						id: this.$route.params.id
					}
				})
				// 监听数据返回
				.then(({ data }) => {
					var type = this.$route.params.id.slice(0, this.$route.params.id.indexOf("B"));
					var typename = this.$route.params.id.slice(this.$route.params.id.indexOf("B") + 1);
					//从主页列表过来的渲染逻辑
					if (data[type]) {
						this.data = data[type].isonp1.subject_collection_items;
						this.others = data[type].isonp2.subject_collection_items;
						this.typename = typename + "电影";
						//预处理评分数据
						var newData = Array.from(this.data);
						var newOthers = Array.from(this.others);
						for(var i = 0; i < newData.length; i++) {
							newData[i].rating.value = newData[i].rating.value / 2;
						}
						for(var j = 0; j < newOthers.length; j++) {
							newOthers[j].rating.value = newOthers[j].rating.value / 2;
						}
						return;
					}
					//匹配查询条件
					var conditions = this.$route.params.id;
					var type_item = [];
					for(var k in data) {
						type_item.push(data[k].isonp1.subject_collection_items);
						type_item.push(data[k].isonp2.subject_collection_items);
					}
					//查询结果数组
					var conditionsArr = [];
					for(var x = 0; x < type_item.length; x++) {
						for(var y = 0; y < type_item[x].length; y++) {
							var result = type_item[x][y].card_subtitle.indexOf(conditions) + type_item[x][y].title.indexOf(conditions) + type_item[x][y].info.indexOf(conditions);
							if (result > -3){
								conditionsArr.push(type_item[x][y]);
							}
						}
					}
					//去重
					for (var p = 0; p < conditionsArr.length; p ++) {
						conditionsArr[p].rating.value = conditionsArr[p].rating.value/2;
						for (var q = p + 1; q < conditionsArr.length; q ++) {
							if(conditionsArr[p].id === conditionsArr[q].id) {
								conditionsArr.splice(q, 1);
								q --;
							}
						}
					}
					//赋值
					this.typename = "您想找的与 " + typename + " 有关的电影";
					this.data = conditionsArr;
					this.others = [];
				})
		},
		//滚动页面事件
		handleScroll() {
			var scrollTop = window.pageYOffset;
			if(scrollTop > 600 && this.lock === true) {
				this.lock = false;
				this.data = this.data.concat(this.others);
			}
		},
		// 是否可播放
		enbleAction(value) {
			if (value == "可播放") {
				return true;
			}
			return false;
		}
	},
	//组建创建完成更新数据
	created() {
		this.dataUpdate();
	}
}
</script>