// 引入vue和路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 主页
import DoubanHome from '../components/DoubanHome.vue';
import DoubanDetail from '../components/DoubanDetail.vue';
// 图书
import BookHome from '../components/BookHome.vue';
import BookList from '../components/BookList.vue';
import BookDetail from '../components/BookDetail.vue';
import BookBottomList from '../components/BookBottomList.vue';
import BookBuy from '../components/BookBuy.vue';
// 电影
import MovieHome from '../components/MovieHome.vue';
import MovieList from '../components/MovieList.vue';
import MovieDetail from '../components/MovieDetail.vue';
import MovieBrowse from '../components/MovieBrowse.vue';
// 音乐
import MusicHome from '../components/MusicHome.vue';
import MusicList from '../components/MusicList.vue';
import MusicDetail from '../components/MusicDetail.vue';
// 公共
import User from '../components/User.vue';
// 第一步 安装
Vue.use(VueRouter);


// 第三步 定义页面组件

// 第四步 定义路由规则
let routes = [
	{path: "*", component: DoubanHome},
	{path: "/BookHome", component: BookHome},
	{path: "/BookList/:id", component: BookList},
	{path: "/BookDetail/:id", component: BookDetail},
    {path:"/BookBottomList/:id",component:BookBottomList},
	{path: "/BookBuy",component:BookBuy},
	{path: "/MovieHome", component: MovieHome},
	{path: "/MovieList/:id", component: MovieList},
	{path: "/MovieDetail/:id", component: MovieDetail},
	{path: "/MovieBroews/:id", component: MovieBrowse},
	{path: "/DoubanHome", component: DoubanHome},
	{path: "/DoubanDetail/:id", component: DoubanDetail},
	{path: "/User/:id",component: User},
	{path: "/MusicHome", component: MusicHome},
	{path: "/MusicList/:id", component: MusicList},
	{path: "/MusicDetail/:classify/:id", component: MusicDetail},
]

// 第五步 实例化路由
export default new VueRouter({ routes })