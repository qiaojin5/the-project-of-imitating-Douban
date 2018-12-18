<template>
<div class="detail">
	<div class="banner-part">
		<img :src="'/img/item/' + data.src" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span class="origin-price">门市价{{data.originPrice}}元</span>
		<span class="btn-buy">立即购买</span>
	</div>
	<ul class="sales-part">
		<li>支持立即退货</li>
		<li>支持随时退货</li>
		<li class="sales">销量{{data.sales}}</li>
	</ul>
	<div class="store-part module">
		<div class="module-header">店家信息</div>
		<div class="module-body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="module-footer">查看{{data.storeNum}}家分店</div>
	</div>
	<div class="buy-part module">
		<div class="module-header">购买须知</div>
		<div class="module-body">
			<ul>
				<li>
					<h3>有效日期</h3>
					<p>{{data.validateTime}}</p>
				</li>
				<li>
					<h3>使用日期</h3>
					<p>{{data.useTime}}</p>
				</li>
				<li>
					<h3>使用规则</h3>
					<p v-for="item in data.rules" :key="item">{{item}}</p>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss" scoped>
@import '../base.scss';
.detail {
	.banner-part {
		position: relative;
		color: #fff;
		img {
			width: 100%;
			display: block;
		}
		h1, p {
			position: absolute;
			left: 10px;
			bottom: 20px;
		}
		h1 {
			bottom: 45px;
			font-size: 24px;
		}
	}
	.price-part {
		background: #fff;
		height: 60px;
		line-height: 60px;
		padding: 0 10px;
		border-bottom: 1px solid #ccc;
		font-size: 14px;
		color: #666;
		.price {
			color: $navColor;
			strong {
				font-size: 36px;
				font-weight: normal;
			}
		}
		.btn-buy {
			float: right;
			color: #fff;
			background: #f60;
			padding: 5px 10px;
			line-height: 1;
			margin-top: 18px;
		}
	}
	.sales-part {
		@include clearfix;
		background: #fff;
		padding: 10px;
		margin-bottom: 10px;
		li {
			float: left;
			width: 50%;
			line-height: 30px;
			color: yellowgreen;
			font-size: 16px;
			&:last-child {
				color: #000;
			}
		}
	}
	.module {
		background: #fff;
		margin-bottom: 10px;
		padding: 10px;
		.module-header {
			font-size: 22px;
			padding: 12px 0;
			border-bottom: 1px solid #ccc;
		}
		.module-body {
			padding: 10px 0;
			line-height: 30px;
			h3 {
				line-height: 50px;
				color: #f60;
				font-weight: normal;
			}
		}
		.module-footer {
			font-size: 16px;
			padding: 7px 0;
			color: skyblue;
			border-top: 1px solid #ccc;
		}
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 数据
	data() {
		return {
			// 预定义数据
			data: {}
		}
	},
	// 局部监听
	// beforeRouteEnter(route, oldRoute, next) {
	// 	console.log(arguments)
	// 	// 执行next方法，进入新的页面
	// 	next();
	// },
	// watch方法，监听属性数据的变化
	watch: {
		$route() {
			// console.log(123, this.$route.params.id)
			// 更新数据
			this.dataUpdate();
		}
	},
	// 方法
	methods: {
		// 更新数据的方法
		dataUpdate() {
			this.$http
				// get请求
				.get('/data/product.json', {
					// query数据
					params: {
						id: this.$route.params.id
					}
				})
				// 监听数据返回
				// .then(({ data }) => console.log(data))
				.then(({ data }) => this.data = data)
		}
	},
	// 组件创建完成时候请求数据
	created() {
		// 更新数据
		this.dataUpdate();
	}
}
</script>