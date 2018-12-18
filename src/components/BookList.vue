<template>
    <div class="listall">
        <h2>最受关注图书 | <template v-if="id=='type1'">虚构类</template><template v-else>非虚构类</template></h2>
        <div class="search"><input type="text" placeholder="请输入搜索关键字" @keyup.enter="searchValue" v-model="search"></div>
        <div class="list-orders" @click="listOrder">
            <span class="title">{{orders.text}}</span>
            <span class="arrow"></span>
        </div>
        <ul class="list">
            <li v-for="(item, index) in dealList" @click="fun_detail(item.id)" :key="index">
                <img :src="item.cover.url" alt="">
                <div class="rightcontent">
                    <h3>{{item.title}}</h3>
                    <div class="stars-container">
                            <div id="stars">
                              <span v-for="(i, index) in item.stars" :key="index">
                                <img v-if="i" src="/img/book/star.png" >
                                <img v-else src="/img/book/none-star.png" >
                              </span>
                             </div>
                            <div :class="item.rating.value==0?'starScoreNull':'starScore'">{{item.rating.value}}</div>
                    </div>
                    <div class="info">
                        {{item.info}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
@import '../base.scss';
.search {
    background: #fff;
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
.list-orders {
    width: 100%;
    text-align: center;
    background: #fff;
    height: 30px;
    line-height: 30px;
    .title {
        margin: 0 auto;
        font-size: 12px;
        color: #666;
    }
    .arrow {
        @include arrow(4px);
        position: relative;
        top: 15px;
        left: -100px;
    }
}
    .listall{
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding:20px;
        box-sizing:border-box;
        background-color: #fff;
        h2{
            font-weight: 500;
            margin-bottom: 20px;
        }
        ul.list{
            width: 100%;
            height: 20%;
            li{
                width: 100%;
                display: flex;
                padding: 20px 0;
                border-top: 1px solid #eee;
                img{
                    width: 33%;
                    height: 20%;
                }
                .rightcontent{
                    width: 60%;
                    margin-left: 5%;
                    h3{
                        font-size: 17px;
                        color: #494949;
                    }
                    .info{
                        padding-top:5px;
                        font-size: 12px;
                        color: #9b9b9b;
                    }
                    .starScore{
                    color: #9b9b9b;
                    font-size: 12px;
                    }
                    .starScoreNull{
                font-size: 12px;
                }
                    .stars-container {
                height: 20px;
                display: flex;
                flex-direction: row;
                align-items:center;
                    #stars img {
                    padding-left: 3rpx;
                    height: 12px;
                    width: 12px;
                    }

                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
export default{
    data(){
        return{
            data:[],
            id:"",
            search:"",
            orders: { text: '评分排序', id: 'rating.value' },
            isTrue:false
        }
    },
    methods:{
        fun_detail(id){
                this.$router.push('/BookDetail/'+id);
            },
        // 列表排序
        listOrder() {
            this.isTrue=!this.isTrue;
            this.data.sort((a, b) => {
                // 根据a与b两个数据中，id字段排序
                // return a[id] - b[id]
                // 倒序
                if(this.isTrue) {
                    return b["rating"]["value"] - a["rating"]["value"];
                }
            return a["rating"]["value"] - b["rating"]["value"]
            })
        }
    },
    computed:{
        dealList(){
            // 只有一句话省略函数体
            return this.data.filter(item => item.title.indexOf(this.search) >= 0)
        }
    },
        // 请求数据
    created() {
        // 发送get请求
        let typeId=this.$route.params.id;
        this.id=typeId;
        if(typeId=="type1"){
            this.$http
            .get("/data/book_list.json")
            // 监听返回
            .then(({ data }) => {
                let data1 = data.page1;
            for(let i=0;i<data1.length;i++){
              let rate=data1[i].rating.value;
              let arr=[0,0,0,0,0];
              let index=Math.floor(rate)/2;
              for(let j=0;j<index;j++){
                arr[j]=1;
              }
              data1[i].stars=arr;
            }
                this.data=data1;
            })
        }else if(typeId=="type2"){
            this.$http
            .get("/data/book_list_no.json")
            // 监听返回
            .then(({ data }) => {
                let data1 = data.page1;
            for(let i=0;i<data1.length;i++){
              let rate=data1[i].rating.value;
              console.log(rate);
              let arr=[0,0,0,0,0];
              let index=Math.floor(rate)/2;
              for(let j=0;j<index;j++){
                arr[j]=1;
                console.log(arr[j]);
              }
              data1[i].stars=arr;
            }
                this.data=data1;
            })          
        }
        
    }
}
</script>