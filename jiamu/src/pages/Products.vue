<template>
    <div class="app-products">
        <section class="sect">
            <div class="p-box">
                <div class="p-blank">
                    <div><a href=""><img class="p-lgimg" :src="details.img_url" alt=""></a></div>
                    <div class="p-sm"><span><a href=""><img class="p-smimg" :src="details.img_url" alt=""></a></span></div>
                </div>
                <div class="p-txt">
                    <h1 class="p-title">{{details.name}}</h1>
                    <div class="p-small"></div>
                    <div class="p-price">&yen;{{details.price}}</div>
                    <div class="p-des"><p>{{details.origin}}</p></div>
                    <el-button type="info">加入购物车</el-button>

                    <input class="p-btn" @click="add" type="button" value="+"/>
                    <button class="p-btn">{{arr}}</button>
                    <input class="p-btn" @click="jian" type="button" value="-"/>

                    <div class="p-inner">
                        <p class="p-bh">商品编号：{{details.pid}}</p>
                        <p class="p-bh">分类：<span>{{details.classify}}</span></p>
                    </div>
                </div>
                <div class="p-fter">
                    <ul class="p-ul">
                        <li><span> 描述</span></li>
                        <li><span>用户评论（0）</span> </li>
                    </ul>
                    <div class="p-penl">来自xxxd的味道</div>
                </div>
                <div>
                    <h2>相关商品</h2>
                    <marquee onmouseover=this.stop() onmouseout=this.start()>
                        <ul class="p-ul products-inner">
                            <li class="products-item"  v-for="item of tealist" :key="item.id">
                                <img :src="item.img_url" alt="">
                                <p class="name">{{item.name}}</p>
                                <p class="price">&yen;{{item.price.toFixed(2)}}</p>
                            </li>
                        </ul>
                    </marquee>
                </div>
            </div>
            
        </section>
    </div>
</template>
<script>
export default {
    name:"products",
    data(){
        return {
            tealist:[],
            id:this.$route.query.id,
            details:{},
            arr:1
        }
    },
    created(){
        this.tea();
        this.loadMore()
    },
    methods:{
        add(){
            var arr = this.arr
            if(arr>0){
            arr += 1
            this.arr = arr;}
            else{
            
            this.arr = 1;}
        },
        jian(){
            var arr = this.arr
            if(arr>1){
            arr -= 1;
            this.arr = arr;}
            else{
        
                this.arr = 1;
            }
            
        },
        loadMore(){
            var url = "http://localhost:3500";
                url += "/qwdetails?id="+this.id;
            this.axios.get(url).then(result=>{
                this.details = result.data.data[0]
                console.log(this.details)
            })
        },
        tea(){
            var url = "http://localhost:3500/jmcProducts";
            this.axios.get(url).then(result=>{
                this.tealist = result.data.data;
                console.log(this.id)
            })
        }
    }
}
</script>
<style scoped>
.price{
    font-size: 25px;
    font-family: 'Raleway';
}
.name{
    margin-top: 20px;
    font-size: 18px;
    color: #ADADAD;
}
.products-item img{
    width: 230px;
    height: 230px;
}
.products-item{
    display: flex;
    width: 25%;
    box-sizing: border-box;
    display: flex;          /*弹性布 局*/
    justify-content: center;/*居中*/
    align-items: center;
    margin: 0 10px;
    flex-direction: row;
    flex-wrap: nowrap;
}
.products-inner{
    display: flex;
    cursor: pointer;
    text-align: center;
}
.p-penl{
    color: #848484;
    font-size: 14px;
    margin: 15px 0;
}
.p-ul li span{
    color: #333333;
    font: 15px 微软雅黑;
    margin: 0 25px 0 0;
    padding: 10px 15px 10px 0;
    font-weight: bold;
    cursor: pointer;
}
.p-ul li{
    display: inline-block;
}
.p-ul{
    list-style: none;
    padding: 0 0 15px 15px;
}
.p-fter{
    clear: both;
    margin: 10px 0;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
}
.p-inner{
    margin-top:30px;
}
.p-bh span{
    color: #DD6363;
}
.p-bh{
    border-top: 1px solid #dddddd;
    margin: 10px 0;
    padding: 7px 0 0;
    font: 15px 微软雅黑;
    color: #777777;
}
.p-btn{
   border:1px solid #cccccc; 
   background: white;
   width: 32px;
   height: 44px;
   cursor: pointer;
}
.p-des{
    font: 16px 微软雅黑;
    color: #666666;
    margin: 20px 0;
}
.p-price{
    color: #000000;
    font: 24px arial;
    font-weight: bold;
}
.p-small{
    width: 80px;
    height: 3px;
    margin: 15px 0;
    background: #DDDDDD;
}
.p-title{
    font:24px 微软雅黑;
    color: #555555;
    margin: 0 0 15px;
    font-weight: bold;
}
.p-txt{
    width: 70%;
    float: left;
}
.p-smimg{
    width: 54px;
    height: 54px; 
}
.p-sm{
    height:70px;
    width: 100%;
    padding: 25px 0 0;
    
}
.p-lgimg{
    height: 244px;
    width: 100%;
}
.p-blank{
    padding: 0 5px;
    width: 29%;
    float: left;
}
.p-box{
    width: 100%;
    font-size: 16px;
    color: #666666;
    padding: 20px 20px;
    margin: 0;
}
.app-products{
    max-width: 1024px;
    margin: 0 auto;
    padding: 0;
    font-size: 14px;
    color: #ADADAD;
}
.sect{
    border-top:3px solid rgba(216,216,216,0.5);   
}
</style>
