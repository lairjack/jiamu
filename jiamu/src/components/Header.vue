<template>
  <div class="app-header">
    <div class="header-fix">
    <el-row :gutter="20">
      <el-col class="hidden-xs-only" :span="16">
        <div class="header-box">
          <span class="header-inner el-icon-phone ">&nbsp;0500-6000000</span>
          <span class="header-inner el-icon-time">&nbsp;上午9点至下午6点</span> 
        </div>
      </el-col>
      <el-col class="hidden-xs-only" :span="8">
        <div class=" header-inner">
          <span class="ccc" @click="login">{{logins}}</span>
          <span>|</span>
          <span class="ccc" @click="regist">注册</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="header-logo">
        <img class="header-img" src="http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9iOTNlNTJiZGE0NjkwOWE5ZjIzOGI4NjIyMWQzYjkzZS00N3g4Mi5wbmc_p_p100_p_3D.png" alt="">
        </div>
      </el-col>
      <el-col :span="12">
        <ul class="header-nav">
          <li class="ccc" @click="indexs">
            商城首页
          </li>
          <li class="dropdown">
            <span @click="fenlei">商品分类</span>
            <div class="dropdown-content">
              <p>美之器物</p>
              <p>南之嘉木</p>
              <p>觉之盆景</p>
            </div>
          </li>
          <li class="dropdown">
            
            <span @click="may">支付方式</span>
            <div class="dropdown-content">
              <p>在线支付</p>
              <p>银行转账</p>
              <p>货到付款</p>
            </div>
          </li>
          <li class="ccc">节气故事</li>
          <li class="dropdown">
            <span>关于嘉木</span>
            <div class="dropdown-content">
              <p>联系我们</p>
              <p>加盟方式</p>
            </div>
          </li>
        </ul>
      </el-col>
      <el-col class="header-nav" :span="8">
        <input type="text" placeholder="嘉木/盆景/文玩"><input type="submit" value="搜索">
      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import Pub from '../pub.js'
export default {
  name: 'headers',
  data () {
    return {
      name:this.$route.query.name,
      logins:"登录",
      uname:''
    }
  },
  created(){
    this.loadmore()
  },
  mounted(){
    Pub.$on("toheader",function(data){
      this.uname = data
      console.log(this.uname)
    })
  },
  methods:{
    loadmore(){
      if(!this.name){
        this.logins
      }else{
        this.logins = "欢迎" + this.name
      }
    },
    fenlei(){
      this.$router.push('/tea')
    },
    login(){
      this.$router.push("/login")
    },
    regist(){
      this.$router.push("/regist")
    },
    indexs(){
      this.$router.push("/")
    },
    may(){
      this.$router.push('/may')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ccc{
  cursor: pointer;
}
.app-header{
  background:#ffffff;
  max-width: 1024px;
  margin: 10px auto;
}
.header-box{
   margin-left: 50px;
}
.header-inner{
    margin-right: 80px;
    padding: 0 5px;
    font-size: 12px;
    color: #757575;
    line-height:40px;
    text-align: right;
}
.header-logo{
  text-align: right;
}
.header-img{
  height: 92px;
  width: 53px;
}
.header-nav{
  margin-top: 70px;
  text-align: center;
  list-style: none;
  display: flex;

}
.header-nav li{
  padding: 0 20px;
  font-size: 12px;
  color: #757575;
}
.header-nav input{
  border: 1px solid red;
  font-size: 20px;
  outline: none;
  display: inline-block;
}
.header-nav input[type='text'] {
    padding: 3px 10px 3px;
    font-size: 14px;
    line-height: 16px;
}
.header-nav input[type='submit'] {
    padding: 3px 10px 3px;
    font-size: 12px;
    color: whitesmoke;
    text-align: center;
    background: red;
}
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.dropdown-content {
  display: none;
  position: absolute;
  left: -8px;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0;
  z-index: 10;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
