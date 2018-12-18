<template>
<div>
<div class="inner">
    <h2 class="title">{{data.title}}</h2>
    <p><span class="left">{{data.target.author.name}}</span><span class="time">2018-11-3 9:20</span></p>
    <div class="cover">
        <img :src="data.target.cover_url">
    </div>
    <div class="content">{{data.target.desc}}</div>
</div>
<Comment></Comment>
</div>
</template>
<style type="text/css" lang="scss" scoped>
.inner {
    padding: 10px;
    padding-bottom: 0px;
    line-height: 2;
    .title {
        font-size: 22px;
        line-height: 1.5;
    }
    p {
        line-height: 40px;
        .left {
            margin-right: 10px;
        }
        .time {
            font-size: 12px;
            float: right;
            color: #ccc;
        }
    }
    .cover {
        height: 100%;
        img {
            width: 100%;
        }
    }
    .content {
        padding-top: 10px;
        font-size: 18px;
        color: #666;
    }
}
</style>
<script type="text/javascript">
import Comment from './Comment.vue';
export default {
    components: { Comment },
    data() {
        return {
            data: {}
        }
    },
    created() {
        this.$http
            .get('/data/doubanDetails.json')
            .then(({data}) => {
                let obj = data;
                let id = this.$route.params.id;
                let result = obj.recommend_feeds.find(function(value) {
                    return value.target.uri.replace(/[^0-9]/ig, "") == id;
                });
                this.data = result;
            });
    }
}
</script>