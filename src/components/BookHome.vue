<template>
    <div class="book">
        <!-- type1 -->
        <div class="type1">
            <div class="cf">
                <h2 class="title">最受关注图书 | 虚构类</h2>
                <router-link to="/BookList/type1" v-text="'更多'" class="more"></router-link>
            </div>
            <div class="wrapper" >
                <ul class="content">
                    <li v-for="(item,index) in type1" @click="fun_detail(item.id)" :key="index">
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>
                        <div class="stars-container">
                            <div id="stars">
                              <span v-for="(i, index) in item.stars" :key="index">
                                <img v-if="i" src="/img/book/star.png" >
                                <img v-else src="/img/book/none-star.png" >
                              </span>
                             </div>
                            <div :class="item.rating==0?'starScoreNull':'starScore'">{{item.rating}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- type2 -->
            <div class="type1">
            <div class="cf">
                <h2 class="title">最受关注图书 | 非虚构类</h2>
                <router-link to="/BookList/type2" v-text="'更多'" class="more"></router-link>
            </div>
            <div class="wrapper">
                <ul class="content">
                    <li v-for="(item,index) in type2" @click="fun_detail(item.id)" :key="index">
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
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- type3 -->
        <div class="type1">
            <div class="cf">
                <h2 class="title">豆瓣书店</h2>
                <router-link to="/BookBuy" v-text="'更多'" class="more"></router-link>
            </div>
            <!-- headerbook -->
            <div class="head-book">
                <img :src="headBook.cover.url" alt="" class="cover">
                <div class="right">
                    <p>{{headBook.title}}<span>￥ {{headBook.price}}</span></p>
                    <div>{{headBook.info}}</div>
                </div> 
            </div>
            <!-- headerbook -->
            <div class="wrapper" >
                <ul class="content">
                    <li v-for="(item,index) in type3" @click="fun_market(item.uri)" :key="index">
                            <img :src="item.cover.url" alt="">
                            <p>{{item.title}}</p>
                            <p><span>￥</span><span>{{item.price}}</span></p>
                    </li>
                </ul>               
            </div>
        </div>  
        <!-- list -->
        <div class="bottom-list">
            <ul>
                <router-link tag="li" :to="'/BookBottomList/'+item.type+'?name='+item.name" v-for="(item, index) in array" :key="index">
                    <span>{{item.name}}</span>
                    <span class="arrow">
                        <span class="arrow white"></span>
                    </span>
                </router-link>
            </ul>
        </div>
        <!-- end -->
    </div>
</template>
<style lang="scss" scoped>
@import '../base.scss';
.book{
    width: 100%;
    background-color: #fff;
}
.type1{
    padding: 10px 0 10px 10px;

    .cf{
        @include clearfix;
    }
    .title{
        float: left;
        font-weight: 500;
        font-size: 1.06rem;
    }
    .more{
        float: right;
        color:#42bd56;
        font-size: 14px;
        margin-right: 10px;
        text-decoration: none;
    }
}
.wrapper{
        width: 100%;
        height: 200px;
        padding: 10px 0;
        /* position: relative;
        left: 0;
        top: 0; */
        overflow: hidden;
        .content{
            white-space: nowrap;
            width: 100%;
            height: 236px;
            overflow-x:auto;
            overflow-y:hidden; 
        }
            li{
            display: inline-block;
            margin-right: 6px;
            width: 100px;
            height: 150px;
            list-style: none;
            text-align: center;
            img{
                height: 90%;
            }
            p{
                    font-size: 14px;                
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #111;
                    span{
                        color: #aaa;
                    }
            }
            .starScore{
              color: #ea2000;
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
.bottom-list{
    width: 100%;
    ul{
        width: 100%;
        box-sizing:border-box;
        padding: 0 10px;
        display: flex;
        flex-wrap:wrap;
        li{
            display: flex;
            align-items:center;
            justify-content:space-between;
            flex: 0 0 50%;
            line-height: 2.64rem;
            border-top: 1px solid #eee;
            color: #42bd56;
            &:last-child{
                border-bottom: 1px solid #eee;
            }
            .arrow{
                @include arrow(10px ,#ccc,left);
                position: relative;
                left: -10px;
                top: 0;
                .white{
                    position: absolute;
                    left: -13px;
                    top: -10px;
                    border-left-color: #fff;
                }
            }
        }
    }
}
/* headerbook */
   .head-book{
    display: flex;
    padding-top:10px;
    align-items:center;
    img{
        width: 33%;
 
    }
    .right{
        width: 60%;
        margin-left: 20px;
        p{  
            margin-top: -50px;
            font-size: 19px;
            color: #494949;
            line-height: 22px;
            span{
                line-height: 22px;
                font-size: 16px;
                color: #e76648;
            }
        }
        div{
            font-size: 13px;
            color: #9b9b9b;
            margin-top: 10px;
        }
    }
 
 } 
/* headerbook */
</style>
<script>
    export default {
        data(){
            return {
                type1:[],
                type2:[],
                type3:[],
                headBook:{},
                array:[{
		"name": "小说",
		"type": "type1"
	}, {
		"name": "爱情",
		"type": "type2"
	},
	{
		"name": "历史",
		"type": "type3"
	},
	{
		"name": "外国文学",
		"type": "type4"
	},
	{
		"name": "青春",
		"type": "type1"
	},
	{
		"name": "励志",
		"type": "type2"
	},
	{
		"name": "随笔",
		"type": "type3"
	},
	{
		"name": "传记",
		"type": "type4"
	},
	{
		"name": "推理",
		"type": "type1"
	},
	{
		"name": "旅行",
		"type": "type2"
	},
	{
		"name": "奇幻",
		"type": "type3"
	},
	{
		"name": "经管",
		"type": "type4"
	}
]
            }
        },
        methods:{
            fun_detail(id){
                this.$router.push('/BookDetail/'+id);
            },
            fun_market(uri){
                // console.log(this.type3[0].uri+"lalala");
                window.location.href=uri;
            }
        },
        created(){
            // 请求数据
        this.$http
            .get('/data/book_home.json')
            // 监听返回
            .then(({ data }) => {
                // console.log(data)
                // 存储数据
                let type1 = data.type1;
            for(let i=0;i<type1.length;i++){
              let rate=type1[i].rating;
              let arr=[0,0,0,0,0];
              let index=Math.floor(rate)/2;
              for(let j=0;j<index;j++){
                arr[j]=1;
              }
              type1[i].stars=arr;
            }
                this.type1=type1;
                let type2 = data.type2;
            for(let i=0;i<type2.length;i++){
              let rate=type2[i].rating.value;
              let arr=[0,0,0,0,0];
              let index=Math.round(rate)/2;
              for(let j=0;j<index;j++){
                arr[j]=1;
              }
              type2[i].stars=arr;
            }
                this.type2=type2;
                this.type3=data.type3;
                this.headBook=data.header;
            })
        },
    }
</script>