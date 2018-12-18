<template>
    <div class="outers">
        <h2>{{title}}</h2>
        <div class="outer-inner">
            <div v-for="(item,index) in list" @click="fun_detail(item.id)" :key="index" class="inner">
                <img :src="item.cover.url" alt="">
                <p>{{item.title}}</p>
                <div class="stars-container">
                    <div id="stars">
                      <span v-for="(i, index) in item.stars" :key="index">
                        <img v-if="i" src="/img/book/star.png" >
                        <img v-else src="/img/book/none-star.png" >
                      </span>
                     </div>
                    <div :class="item.rating.value==0?'starScoreNull':'starScore'">{{item.rating.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .outers{
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing:border-box;
        background-color: #fff;
        h2{
            font-weight: 500;
            margin-left: 10px;
            margin-bottom: 20px;
        }
        .outer-inner{
            display: flex;
            flex-wrap:wrap;
            justify-content:space-around;
        }
        .inner{
            width: 30%;
            height: 150px;
            text-align: center;
            margin-right: 2px;
            img{
                height: 70%;
                width: 85%;
            }
            p{
                    font-size: 13px;                
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #494949;
                    span{
                        color: #aaa;
                    }
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
                padding: 0 5px;
                flex-direction: row;
                align-items:center;
                justify-content:space-between;
                    #stars img {
                    padding-left: 3rpx;
                    height: 12px;
                    width: 12px;
                    }
                }
        }
    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return{
                title:"",
                list:[],
            }
        },
        methods: {
            fun_detail(id){
                this.$router.push('/BookDetail/' + id);
            },
        },
        created(){
            this.$http
            .get('/data/book_bottom_list.json')
            // 监听返回
            .then(({ data }) => {
                // console.log(data)
                // 存储数据
                let type=this.$route.params.id;
                this.title=this.$route.query.name;
                let type1 = data[type];
                for(let i=0;i<type1.length;i++){
                    let rate=type1[i].rating.value;
                    let arr=[0,0,0,0,0];
                    let index=Math.floor(rate)/2;
                    for(let j=0;j<index;j++){
                    arr[j]=1;
                    }
                    type1[i].stars=arr;
                }
                this.list=type1;
        })
    }
}
</script>
