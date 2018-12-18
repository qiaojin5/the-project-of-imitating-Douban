<template>
<div>
    <router-link class="doubanItem" v-for="(item, index) in data.recommend_feeds" :key="index" :to='"/DoubanDetail/" + item.target.uri.replace(/[^0-9]/ig, "")' tag="div">
        <div class="inner">
            <div class="top">
                <div class="left">
                    <h2>{{item.title}}</h2>
                    <div class="doubanItemcontent">{{item.target.desc}}</div>
                </div>
                <div class="cover" v-show="item.target.cover_url">
                    <img :src="item.target.cover_url">
                </div>
            </div>
            <div class="btm">by {{item.target.author.name}}</div>
        </div>
    </router-link>
    <div class="loadMore" @click="loadMore">加载更多</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
.doubanItem {
    padding: 20px 10px;
    padding-bottom: 0px;
    .inner {
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
    .top {
        display: flex;
        .left {
            flex: 5;
            h2 {
                text-align: justify;
                font-size: 17px;
                font-weight: 500;
                line-height: 1.41;
                color: #494949;
                margin-bottom: 6px;
            }
            .doubanItemcontent {
                text-align: justify;
                color: #aaa;
                font-size: 12px;
                line-height: 1.5;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
        }
        .cover {
            flex: 2;
            img {
                margin-left: 10%;
                width: 80%;
            }
        }
    }
    .btm {
        font-size: 12px;
        line-height: 30px;
        color: #ccc;
    }
}
.loadMore {
    text-align: center;
    line-height: 2;
    font-size: 14px;
    padding-bottom: 10px;
}
</style>
<script type="text/javascript">
export default {
    data() {
        return {
            data: {},
            num: 10
        }
    },
    created() {
        this.$http
            .get('/data/doubanHome.json')
            .then(({data}) => {
                data.recommend_feeds.length = this.num;
                this.data = data;
            });
    },
    methods: {
        loadMore() {
            this.num += 10;
            this.$http
                .get('/data/doubanHome.json')
                .then(({data}) => {
                        console.log(data.recommend_feeds)
                        data.recommend_feeds.length = this.num;
                        this.data = data;
                })
        }
    }

}
</script>