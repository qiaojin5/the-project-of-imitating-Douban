<template>
    <div class="outer">
        <ul class="list">
            <li v-for="item in list" @click="fun_market(item.url)" :key="item.id">
                <img :src="item.rectangle_pic" class="back">
                <div class="rightall">
                    <img :src="item.square_pic" alt="">
                    
                    <span>￥{{item.price}}</span>
                    <div class="info">
                        <p class="title">{{item.title}}</p>
                        {{item.desc}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.outer{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing:border-box;
    .list{
        width: 100%;
        li{
            margin-bottom: 20px;
            background-color: #fff;
            height: 280px;
            width: 100%;
            .back{
                width: 100%;
                height: 50%;
            }
            .rightall{
                position: relative;
                width: 100%;
                height: 50%;
                img{
                    z-index:10;
                    position: absolute;
                    left: 20px;
                    top: -35px;
                    width: 30%;
                    height: 90%;
                }
                span{
                    position: absolute;
                    right: 0;
                    top: -20px;
                    font-size: 18px;
                    background-color: #e76648;
                    color: #fff;
                }
                .info{
                    .title{
                        padding: 10px 0;
                        font-weight: 700;
                        font-size: 18px;
                        color: #000;
                    }
                    color:#9b9b9b;
                    font-size:14px;
                    position: absolute;
                    width: 60%;
                    right: 0;
                    top: 0;
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
                list:[]
            }
        },
        created(){
            this.$http
            .get("/data/book_buy.json")
            // 监听返回
            .then(({ data }) => {
              this.list=data;
            })
                
        },
        methods:{
            fun_market(uri){
                console.log(uri);
                window.location.href=uri;
            }
        }
}
</script>