<template>
<div>
	<div class="bg">
		<img class="back" :src="data.avatar">
		<img class="prev" :src="data.avatar">
	</div>
	<div class="info">
		<div class="name">{{data.name}}</div>
		<div class="adress">{{data.loc.name}}</div>
		<div class="sign">不活,会死的</div>
		<div class="follow">关注</div>
	</div>
	<div class="list">
		<router-link class="li" tag="div" to="/User/note">
			<p>1</p>
			<p>日记</p>
		</router-link>
		<div class="li">
			<p>6</p>
			<p>小组</p>
		</div>
		<div class="li">
			<p>683</p>
			<p>广播</p>
		</div>
		<div class="li">
			<p>2</p>
			<p>豆列</p>
		</div>
	</div>
	<router-view></router-view>
</div>
</template>
<style type="text/css" lang="scss" scoped>
.bg {
	width: 100%;
	height: 200px;
	position: relative;
	background: -webkit-linear-gradient(left, lightpink, lightblue, skyblue);
	.back {
		display: block;
		width: 100%;
		height: 100%;
		opacity: 0.2;
	}
	.prev {
		position: absolute;
		width: 100px;
		height: 100px;
		top: 50px;
		left: 50%;
		border-radius: 50%;
		margin-left: -50px;
		border: 1px solid #000;
		box-shadow: 0 0 20px #000;
	}
}
.info {
	padding: 10px;
	position: relative;
	line-height: 2;
	.name {
		font-size: 20px;
	}
	.adress {
		font-size: 12px;
		color: #aaa;
	}
	.sign {
		font-size: 14px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ccc
	}
	.follow {
		position: absolute;
		right: 20px;
		top: 20px;
		width: 80px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: #42bd56;
		color: #fff;
		border-radius: 15px;
	}
}
.list {
	display: flex;
	.li {
		flex: 1;
		text-align: center;
		font-size: 14px;
		line-height: 2;
		p:first-child {
			font-size: 18px;
			font-weight: 700;
		}
	}
}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				data: {}
			}
		},
		created(){
			let id = this.$route.params.id;
			this.$http
				.get('/data/comment.json')
				.then(({data}) => {
					let result = data.interests.find(function(value) {
						return value.user.id == id;
					});
					this.data = result.user;
			})
		}
	}
</script>