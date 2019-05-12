<template>
    <div>
        <div>
            <img src="../../public/img/82446a939b88f23f86f61ef6b1cafcb8.jpg" alt="">
        </div>
        <div class="layout-box">
                
                <div class="layout-ft">
                    <div class="layout-span">美<span class="ziti">之</span>器物</div>
                </div>
                <div class="layout-ft">
                    <span class="layout-en">Beautiful Utensil</span>
                </div>
                <div class="tea-fd">
                    <ul class="tea-fot">
                        <li><a href="">茶道</a></li>
                        <li><a href="">花道</a></li>
                        <li><a href="">香道</a></li>
                        <li><a href="">白茶</a></li>    
                    </ul>
                </div>
                <div class="layout-box">
                    <div class="layout-u">
                    <ul class="layout-l" v-for="item of no1list" :key="item.id">
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
                <div class="layout-box yc1" style="display: none;">
                    <div class="layout-u">
                    <ul class="layout-l" v-for="item of no2list" :key="item.id">
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
                <div class="layout-box yc2" style="display: none;">
                    <div class="layout-u">
                    <ul class="layout-l" v-for="item of no3list" :key="item.id">
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
                <div class="layout-box yc3" style="display: none;">
                    <div class="layout-u">
                    <ul class="layout-l" v-for="item of no4list" :key="item.id">
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
        </div> 
    </div>           
</template>
<script>
export default {
    name:"tea",
    data(){
        return {
           no1list:[],
           no2list:[
               {id:1,name:"柴烧花器",img_url:"http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS8wNmEwOTE5MDc3ZTc3OWMzZjUwNjY1YTllZjUwMzI3Ni00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",price:500}
           ],
           no3list:[
               {id:1,name:"香炉",img_url:"http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS82NjcwOTdkZGJiMTZkYzk2MGVjZDQ2MmNiZjM3N2QyOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",price:1599}
           ],
           no4list:[
               {id:1,name:"西湖龙井",img_url:"http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kOGIxNDIzZmUyMTM0NmQ4NzA2NzkzYWU1MmI5YmVkOC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",price:600}
           ]
        }
    },
    created(){
        this.teas();
    },
    methods:{
        teas(){
            var url = "http://localhost:3500/teaproducts";
            this.axios.get(url).then(result=>{
                this.no1list = result.data.data
                //console.log(this.no1list)
            })
        },
        
    }
}
</script>
<style scoped>

.tea-dh{
    width: 100px;
    height: 25px;
    border: 1px solid rgba(226, 226, 226,1);
    margin: 0 5px;
    padding: 10px 12px;
    text-align: center;
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
.layout-box{
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
.tea-fot li a{
    cursor: pointer;
    font-size: 14px;
    color: #494949;
}
.tea-fot li{
    width: 100px;
    height: 25px;
    border: 1px solid rgba(226, 226, 226,1);
    margin: 0 5px;
    padding: 10px 12px;
    text-align: center;
   
}
.tea-fd{
    display: flex;  
}
.tea-fot{
    list-style: none;
    display: flex;
    margin: 20px auto;
    text-align: center;
    cursor: pointer;
}
.layout-box{
    border-radius: 0;
    color: #666666;
    margin: 10px auto;
    padding: 0;
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
.ziti{
    color: rgb(178, 34, 34);
    font-family:宋体;
    text-align: center;
    font-size: 26px;
}
</style>
