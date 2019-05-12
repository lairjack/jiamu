<template>
    <div class="app-index">
    <!-- //轮播 -->
        <div class="block">
        <span class="demonstration"></span>
            <el-carousel height="714px">
                <el-carousel-item v-for="item in imglist" :key="item.id">
                    <img :src="item.img_url" class="image">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="layout-fg">
            <div class="layout-ft">
                <span class="layout-span">所有商品</span>
            </div>
            <div class="layout-ft">
                <span class="layout-en">All Commodity</span>
            </div>
            <div class="layout-ft">
                <span class="layout-icon el-icon-d-arrow-right"></span>
            </div>
            <div class="layout-box">
                <img class="layout-img" src="http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi8zZjA5MTQ4MGYwMzUyOWFiYjQzY2YxZDM2Y2ZlNzZiOS0xOTIweDU1MC5qcGc_p_p100_p_3D.jpg" alt="">
                <div class="layout-ft">
                    <div class="layout-span">美<span class="ziti">之</span>器物</div>
                </div>
                <div class="layout-ft">
                    <span class="layout-en">Beautiful Utensil</span>
                </div>
                <div class="layout-u">
                    <ul class="layout-l" v-for="item of qwlist" :key="item.id">
                        <router-link :to="'/products?id='+item.id">
                        <li>
                                <img :src="item.img_url">
                            
                            <p class="name">{{item.name}}</p>
                            <p class="price">¥{{item.price.toFixed(2)}}</p>
                        </li>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="layout-ft big">
                <span class="layout-icon el-icon-d-arrow-right "></span>
            </div>  
            <div class="layout-box">
                <img class="layout-img" src="http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi9mNGNkZDQzOTBlNzA3ZjcxYTVmMmY5N2RmMGRlMGRhNC0xOTIweDU1MC5qcGc_p_p100_p_3D.jpg" alt="">
                <div class="layout-ft">
                    <div class="layout-span">觉<span class="ziti">之</span>盆景</div>
                </div>
                <div class="layout-ft">
                    <span class="layout-en">Bonsai</span>
                </div>
                <div class="layout-u">
                <ul class="layout-l" v-for="item of pjlist" :key="item.id">
                    <li>
                        <a href="">
                            <img :src="item.img_url">
                        </a>
                        <p class="name">{{item.name}}</p>
                        <p class="price">¥{{item.price.toFixed(2)}}</p>
                    </li>
                </ul>
                </div>
            </div>
            <div class="layout-ft big">
                <span class="layout-icon el-icon-d-arrow-right "></span>
            </div>
            <div class="layout-box">
                <img class="layout-img" src="http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNC8wNi9mMTYwZGY4MjNjZGU5NDI3MjE3NDdjMjAyMzk5OTk5YS0xOTIweDU1MC5qcGc_p_p100_p_3D.jpg" alt="">
                <div class="layout-ft">
                    <div class="layout-span">南<span class="ziti">之</span>嘉木</div>
                </div>
                <div class="layout-ft">
                    <span class="layout-en">Chinese Tea</span>
                </div>
                <div class="layout-u">
                <ul class="layout-l" v-for="item of tealist" :key="item.id">
                    <li>
                        <a href="">
                            <img :src="item.img_url">
                        </a>
                        <p class="name">{{item.name}}</p>
                        <p class="price">¥{{item.price.toFixed(2)}}</p>
                    </li>
                </ul>
                </div>
            </div>
            <div class="db-fd">
                <ul class="layout-fot">
                    <li class="cc">
                        <div class="layout-yuan">
                            <span class=" el-icon-phone-outline"></span>
                        </div>
                        <p class="kf">在线客服</p>
                        <p class="sj">周一至周五09:00-18:00</p>
                    </li>
                    <li class="cc">
                        <div class="layout-yuan">
                            <span class=" el-icon-date"></span>
                        </div>
                        <p class="kf">退货换货</p>
                        <p class="sj">七天无理由退货，15天免费换货</p>
                    </li>
                    <li class="cc">
                        <div class="layout-yuan">
                            <span class=" el-icon-goods"></span>
                        </div>
                        <p class="kf">包邮</p>
                        <p class="sj">满500元免运费</p>
                    </li>
                    <li class="cc">
                        <div class="layout-yuan">
                            <span class=" el-icon-edit"></span>
                        </div>
                        <p class="kf">认证</p>
                        <p class="sj">客户认证好评</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:"layout",
    data(){
        return {
            imglist:[],
            qwlist:[],
            pjlist:[],
            tealist:[]
        }
    },
    created(){
        this.indexImg();
        this.implements();
        this.bonsai();
        this.tea()
    },
    methods:{
        indexImg(){
            var url = "http://localhost:3500/imglist";
            this.axios.get(url).then(result=>{
                this.imglist = result.data.data
                //console.log(this.imglist)
            })
        },
        implements(){
            var url = "http://localhost:3500/jmqwProducts";
            this.axios.get(url).then(result=>{
                this.qwlist = result.data.data;
                 //console.log(this.qwlist)
            })
        },
        bonsai(){
            var url = "http://localhost:3500/jmpjProducts";
            this.axios.get(url).then(result=>{
                this.pjlist = result.data.data;
                
            })
        },
        tea(){
            var url = "http://localhost:3500/jmcProducts";
            this.axios.get(url).then(result=>{
                this.tealist = result.data.data;
                
            })
        }
    }
}
</script>
<style scoped>

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
.layout-fg{
    margin-top: 40px;
    margin-bottom: 0;
    border-radius: 0px;
    color: #666666;
    box-sizing: border-box;
}
.layout-ft{
    line-height: 1.5em;
    background-repeat: no-repeat;
    padding: 0px;
    text-align: center;
}
.layout-ft .layout-span{
        font-size: 24px;
        color: rgb(0, 0, 0);
        
}
.layout-ft .layout-en{
    font-family: raleway;
    font-size: 13px;
    letter-spacing: 3px;
}
.layout-ft .layout-icon{
     transform:rotate(90deg);
}
.layout-img{
    vertical-align: middle;
    max-width: 100%;
    width: auto;
    height: auto;
}
.ziti{
    color: rgb(178, 34, 34);
    font-family:宋体;
    text-align: center;
    font-size: 26px;
}
.layout-box{
    border-radius: 0;
    border: 1px solid #dbdbdb;
    color: #666666;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0;
}
.layout-box .layout-u{
    display: flex;
    cursor: pointer;
    text-align: center;
    flex-wrap:wrap;   
}
.layout-l{
  list-style: none;
  width:25%;
  box-sizing: border-box;
  display: flex;          /*弹性布 局*/
  justify-content: center;/*居中*/
  align-items: center;
  padding-left: 0;
}
.layout-box .layout-u .layout-l img{
    width: 230px;
    height: 230px;
}
.layout-box .layout-u .layout-l img:hover{
    transform:scale(1.1);
}
.layout-box .layout-u .layout-l .name{
    margin-top: 20px;
    font-size: 14px;
    color: #ADADAD;
}
.layout-box .layout-u .layout-l .price{
    font-size: 18px;
    font-family: 'Raleway';
}
.big{
    margin: 20px auto;
}
.db-fd{
    display: flex;  
}
.layout-fot{
    list-style: none;
    display: flex;
    margin: 50px auto;
    text-align: center;
}
.layout-yuan{
    width: 82px;
    height: 82px;
    margin: auto;
    border-radius: 50%;
    border: 1px solid #000000;
    text-align: center;
    
}
.layout-yuan span{
    transform: scale(3);
    margin-top: 35px;
}
.kf{
    font-size: 15px;
    color: #A9A9A9;
    font-family:微软雅黑;
}
.sj{
    font-size: 13px;
    color: #A9A9A9;
    
    
}
.cc{
    width: 190px;
    height: 240px;
    text-align: center;
    margin: 10px 30px;
}
</style>
