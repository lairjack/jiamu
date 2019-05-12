<template>
    <div class="app-footer">
        <div style="width:100%;height:50px;"></div>
        <div class="footer-logo">
            <img src="http://127.0.0.1:3500/img/aHR0cDovLzU2OGM4MjkxOWRmYmYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9iOTNlNTJiZGE0NjkwOWE5ZjIzOGI4NjIyMWQzYjkzZS5wbmc_p_p100_p_3D.png" alt="">
        </div>
        <div class="db-fd">
            <ul class="footer-fot">
                <li class="zhifu">
                    支付方式
                    <ul class="footer-ul">
                        <li>在线支付</li>
                        <li>货到付款</li>
                        <li>银行转账</li>
                    </ul>
                    
                </li>
                <li class="zhifu">支付方式
                    <ul class="footer-ul">
                        <li>在线支付</li>
                        <li>货到付款</li>
                        <li>银行转账</li>
                    </ul>
                </li>
                <li class="zhifu">支付方式
                    <ul class="footer-ul">
                        <li>在线支付</li>
                        <li>货到付款</li>
                        <li>银行转账</li>
                    </ul>
                </li>
                
            </ul>
        </div>
        <div class="shangbiao">Copyright © 2010-2015 南之嘉木茶文化有限公司. All rights reserved.</div>
    </div>
</template>
<script>
export default {
    name:"footers",
    data(){
            return {

            }
    }
}
</script>
<style scoped>
.app-footer{
    width: 100%;
    clear: both;
    text-align: center;
    background:#f2f2f2;
}
.footer-logo{
    margin: 10px auto;
}
.footer-logo img{
    width: auto;
    height: 84px;
}
.db-fd{
    display: flex;  
}
.footer-fot{
    list-style: none;
    display: flex;
    margin:0 auto; 
    padding: 0 20px;
}
.footer-fot .zhifu{
    padding: 0 80px;
    color: #666666;
    line-height: 30px;
}
.footer-ul{
    list-style: none;
    margin-left: -38px;
    cursor: pointer;
}
.footer-ul li{
    font-size: 14px;
    color: #A0A0A0;
    line-height: 30px;
}
.shangbiao{
    font-size: 13px;
    color: #9E9E9E;
    margin: 20px auto;  
}
</style>
