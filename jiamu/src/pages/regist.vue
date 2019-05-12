<template>
  <div class="app-regist">
     		<div class="reg-ff">
				<div class="">
           <h3>用户注册</h3>
        </div>									
						<form>
              用户名:
              <input type="text" value=""
              placeholder="请输入用户名" v-model="name"
              @blur.prevent="checkName" /> <br>
              密 &nbsp;&nbsp;码:
              <input type="password" value=""
              placeholder="请输入密码" v-model="pwd" /> <br>
              确认密码:
              <input type="password" value=""
              placeholder="请输入确认密码" v-model="pwd2" /> <br>
              <el-button class="lf" size="small" type="primary" @click="handleReg">注册</el-button>
            </form>					
			</div>
  </div>  
</template>
<script>
import { Message } from 'element-ui';
  export default {
      name:'regist',
    data(){
      return {
        name:"",  //准备双向绑定数据
        pwd:"",
        pwd2:"",
        isSumit:false //是否允许提交
      }
    },
    methods:{
      checkName(){
        //1:获取用户输入用户名
        var n = this.name;
        //2:发送ajax请求
        var url = "http://127.0.0.1:3500/existname";
        url+="?name="+n;
        this.axios.get(url).then(result=>{
          if(result.data.code > 0){
            Message("欢迎使用!")
            this.isSumit = true;
          }else{
            Message("该用户名己存在!")
            this.isSumit = false;
          }
        })
        //3:提示消息
      },
      handleReg(){
        if(this.isSumit === false){ //禁止提交
          Message("用户名己存在，请修改");
          return;
        }
        //1:获取用户输入用户名 密码 确认密码
        //  双向绑定
        var n = this.name;
        var p = this.pwd;
        var p2 = this.pwd2;
        //2:验证
        var regname = /^[a-z0-9_]{8,12}$/i;
        var regpwd = /^[a-z0-9]{8,12}$/i
        //验证用户名
        if(!regname.test(n)){
           Message("用户名格式不正确");
           return;
        }
        //验证密码
        if(!regpwd.test(p)){
          Message("密码格式不正确");
          return;
        }
        //验证密码与确认密码一致
        if(p != p2){
          Message("两次密码不一致，请修改");
          return;
        }
        //3:发送ajax请求
        var url = "http://127.0.0.1:3500/regist?";
        url +="name="+n;
        url +="&pwd="+p
        this.axios.get(url).then(result=>{
            //console.log(result.data);
            Message(result.data.msg)
            this.$router.push("/login")
        })
        //4:提示
      }
    }
  }  
</script>
<style scoped>
input{
  margin: 10px 0;
}
.lf{
  margin-left: -65px;
  margin-top: 5px;
}
.reg-ff{
    margin-top: 30px;
    width: 300px;
    height: 250px;
    text-align: center;
    position: absolute;
    left: 40%;
    color:white;
}
.app-regist{
    margin: 0 auto;
    position: relative;
    height: 300px;
    background: #666666;
    
}
</style>

