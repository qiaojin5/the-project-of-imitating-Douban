<template>
	<div>
		<!-- 搜索栏 -->
		<div class="search">
			<input type="text" placeholder="请输入搜索关键字"  @keyup.enter="searchValue" v-model="search">
		</div>
		<!-- 排序 -->
		<ul class="list-orders">
			<li v-for="(item, index) in orders" :key="index" @click="listOrder(item.id)">
				<span class="title">{{item.text}}</span>
				<span class="arrow"></span>
			</li>
		</ul>
		<!-- 将每一个作品定义为一个子组件为Work -->
		<Work v-for="(item, index) in dealworks" :key="index" :classify="classify" :data="item" class="work"></Work>
	</div>
</template>

<style type="text/css" lang="scss" scoped>
// 引入基础样式
@import '../base.scss';
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
.work {
	width: 100%;
	padding:0 10px;
	box-sizing: border-box;
}
.list-orders {
	display: flex;
	text-align: center;
	li {
		flex: 1;
		height: 30px;
		line-height: 30px;
	}
	.title {
		font-size: 14px;
		color: #666;
		margin-right: 5px;
	}
	.arrow {
		@include arrow(4px);
		position: relative;
		top: -2px;
		left: 2px;
		border-top-color: #aaa;
	}
}

// 搜索框
.search {
  padding: 10px 20px;
  display: flex;
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
</style>

<script type="text/javascript">
	import Work from './Work.vue';

	//想在这个页面中使用item组件，第一步，先引入
	export default {
		components: { Work },
		data() {
			return {
				search: '',
				works: [],
				classify: '',
				orders: [
				{ text: '好评排序', id: 'rate' },
				// { text: '最新排序', id: 'date' },
			],
			}
		},
		computed: {
			dealworks() {
				// console.log(this.$store)
				return this.works.filter(item => item.title.indexOf(this.$store.state.search) >= 0 )
			}
		},
		methods: {
				// 开始搜索
			searchValue() {
				// 发布消息
				this.$store.commit('updateSearch', this.search)
				// 清空输入框
				this.search = '';
			},
			listOrder(id) {
				console.log(id);
				// 根据id对list排序,a代表当前的，b代表下一个
				if( id === "rate") {
					return this.works.sort((a, b) => {
						return b.rating - a.rating  
					})
				} 
			}

		},
		// 组件创建完成，请求数据
		created() {
			this.$http
			.get('/data/musicHome.json')
			.then(({data}) => {
				console.log(this.$route.params)
				let num = this.$route.params.id;
				this.classify = num;
				for(var i in data) {
					if(data[i].id == num) {
						// console.log(data[i])
						this.works = data[i].list
					}
				}
			})
		}

	}

</script>