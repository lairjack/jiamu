<template>
    <div class="app-login">
        <div class="login-ff">
				<div class="">
           <h3>用户登录</h3>
        </div>
				<div >
					
                        <form>
                            用户名:
                                    <input class="login-input" type="text" value=""
                                    placeholder="请输入用户名" 
                                     v-model="name"/> <br>
                            密&nbsp;&nbsp; 码:
                                    <input class="login-input" type="password" value=""
                                    placeholder="请输入密码"
                                     v-model="pwd"/> <br>
                            <el-button class="button" type="primary" size="small" @click="handleLogin">登录</el-button>
                         </form>
					
				</div>
				
			</div>
    </div>
</template>
<script>
import { Message } from 'element-ui';
import Pub from '../pub.js'
export default {
    name:'login',
    data(){
        return{
            name:"",
            pwd:""
        }
    },
    methods:{
        handleLogin(){
            var name=this.name;
            var pwd=this.pwd;
            
            var reg=/^[0-9a-z_]{3,12}$/i;
            if(!reg.test(name)){
                Message("用户名格式不对");
                return;
            }
            if(!reg.test(pwd)){
                Message("密码格式不对");
                return;
            }
            var url="http://127.0.0.1:3500";
            url+="/login?name="+name;
            url+="&pwd="+pwd;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    Message("登陆成功");
                    this.$router.push("/?name="+name);
                    Pub.$emit("toheader",name)
                }else{
                    Message("用户名或密码错误")
                }
            })
        }

    }
}
</script>
<style scoped>
.login-ff{
    margin-top: 30px;
    width: 300px;
    height: 250px;
    text-align: center;
    position: absolute;
    left: 40%;
}
.login-input{
    margin: 10px 0;
    padding: 5px 0;
}
.button{
    margin-left: -65px;
}
.app-login{
    margin: 0 auto;
    position: relative;
    height: 300px;
    background: #666666;
}
</style>
