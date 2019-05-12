const express = require("express");
const mysql = require("mysql");
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jm"
});
var app = express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:false
}))
app.listen(3500);

const cors = require("cors");
app.use(cors({
    origin:[
        "http://127.0.0.1:8080",
        "http://localhost:8080"
    ],
    credentials:true
}))

const session = require("express-session");
app.use(session({
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    }
}))

//判断用户是否存在
app.get("/existname",(req,res)=>{
    //参数
  var name = req.query.name;
 
  var sql = " SELECT count(id) as c FROM jm_login";
      sql+=" WHERE name = ?";
  pool.query(sql,[name],(err,result)=>{
       if(err)throw err;
       if(result[0].c > 0){
         res.send({code:-1,msg:"该用户名己存在"})
       }else{
         res.send({code:1,msg:"欢迎使用"});
       }
  }) 
})
//zhuce
app.get("/regist",(req,res)=>{
    var name = req.query.name;
    var pwd = req.query.pwd;
    var reg = /^[a-z0-9_]{8,12}$/;
    if(!reg.test(name)){
        res.send({code:-1,msg:"用户格式不对"})
        return;
    }

    var sql = "INSERT INTO jm_login"
    sql += " VALUES (null,?,md5(?))"
    pool.query(sql,[name,pwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
           res.send({code:1,msg:"注册成功"}) 
        }else{
            res.send({code:-1,msg:"注册失败"}) 
        }
    })
})
//登录
app.get("/login",(req,res)=>{
    var name = req.query.name;
    var pwd = req.query.pwd;
    
    var sql = 'SELECT id FROM jm_login';
    sql += " WHERE name = ? AND pwd = md5(?)";
    pool.query(sql,[name,pwd],(err,result)=>{
      if(err) throw err;
      //res.send(result);
      
      if(result.length == 0)
      res.send({code:-1,msg:"用户名或密码错误"})
      else
      req.session.uid = result[0].id;
      res.send({code:1,msg:"登陆成功"})
    })
  })

//轮播
app.get("/imglist",(req,res)=>{
    var rows = [
        {id:1,img_url:"http://localhost:3500/img/f1de2c98fd64435744b5f0f28bcf45b0.jpg"},
        {id:2,img_url:"http://localhost:3500/img/1745888075bea13cae365b9485f67579.jpg"},
        {id:3,img_url:"http://localhost:3500/img/d0533f0605241654ebc84d1156ec8e25.jpg"}
    ];
    res.send({code:1,data:rows})
})
//器物商品
app.get("/jmqwProducts",(req,res)=>{
    var sql = "SELECT id,name,img_url,price";
        sql += " FROM jmqw_products";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })  
})
//盆景
app.get("/jmpjProducts",(req,res)=>{
    var sql = "SELECT id,name,img_url,price";
        sql += " FROM jmpj_products";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })  
})
//茶叶
app.get("/jmcProducts",(req,res)=>{
    var sql = "SELECT id,name,img_url,price";
        sql += " FROM jmc_products";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })  
})
app.get("/teaproducts",(req,res)=>{
    var sql = "SELECT id,name,img_url,price";
        sql += " FROM jmtea_products";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })      
})

//器物的详情页
app.get("/qwdetails",(req,res)=>{
    var nid = req.query.id;
    console.log(nid)
    var reg = /^[0-9]{1,}$/;
    if(!reg.test(nid)){
        res.send({code:-1,msg:'参数不对'});
        return;
    }
    var sql = "SELECT id,name,img_url,price,origin,pid,qw_count,classify";
        sql += " FROM jmqw_products WHERE id = ?";
    nid = parseInt(nid);
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})