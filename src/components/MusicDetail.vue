<template>
	<div>
	<div class="container" v-cloak>
		<!-- 上面唱片信息 -->	
		<div class="songTitle">{{musicDetail.title}}</div>
		<div class="intro">
			<div class="noCover">
				<div class="songRating">
					<span class="score">评分：{{(Math.round((musicDetail.rating)*10)/10).toFixed(1)}}</span>
					<span class="num">{{(Math.round((musicDetail.rating*1000)*10)/10).toFixed(1)}}人评价</span>
				</div>
				<div class="info">{{musicDetail.info}}</div>
			</div>
			<img :src="'/pic/' + musicDetail.img" alt="" class="songCover">
		</div>
		<!-- // 想听、在听、听过 -->
		<ul class="do">
			<li>想听</li>
			<li>在听</li>
			<li>听过</li>
		</ul>

		<!-- 所属频道 -->
		<div class="channel">
			<h3>所属频道</h3>
			<span v-for="(item, index) in musicDetail.tags" :key="index">{{item}}&nbsp;&gt;</span>
		</div>

		<!-- 唱片简介 -->
		<div class="songIntro">
			<h3>唱片简介</h3>
			<p>{{musicDetail.desc}}</p>
		</div>
	</div>
	<Comment></Comment>
	</div>
</template>


<style type="text/css"  lang="scss" scoped>
@import '../base.scss';
[v-cloak] {
	display: none;
}
.container {
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	.songTitle {
		line-height: 40px;
		font-size: 24px;
	}
	.intro {
		display: flex;
		justify-content: space-between;

		img {
			display: block;
			width: 100px;
			height: 100px;
		}
		.noCover .num {
			margin-left: 20px;
			color: #C6C6C6;
		}
		.noCover .info {
			margin-top: 20px;
			color: #535353;
		}

	}
	// 想听、在听、听过
	.do {
		margin-top: 10px;
		height: 40px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		li {
			flex: 1;
			height: 30px;
			line-height: 30px;
			border: 1px solid #ffb712;
			border-radius: 3px;
			margin-right: 10px;
			color: #ffb712;
			font-size: 15px;
			text-align: center;
			list-style: none;
		}

	}
	// 所属频道
	.channel, .songIntro {
		margin-top: 25px;
		color: #484848;
		h3 {
			font-size: 16px;
			color: #B1B1B1;
			margin-bottom: 15px; 
		}
		span {
			background-color: #effaf0;
			border: 1px solid #42bd56;
			display: inline-block;
			margin-right: 10px;
			font-size: 13px;
			padding: 5px 10px;
			border-radius: 15px;
			margin-bottom: 10px;
			color: $textColor;
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
				musicDetail: {}
			}
		},
		// 组件创建完成后请求数据
		created() {
			let classify = this.$route.params.classify
			let id = this.$route.params.id
			this.$http
			.get('/data/musicHome.json')
			.then(({data}) => {
				for(var i in data) {
					let item = data[i];
					if (item.id == classify) {
						// console.log(item)
						for(var j in item.list) {
							if (item.list[j].id == id) {
								// console.log(item.list[idx])
								this.musicDetail = item.list[j]
								break;
							}
						}
						break;
					}
				}
			})
		}
	}
</script>