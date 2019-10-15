//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"ms",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你
var server = express();
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(4000);

//8:功能一:完成用户登录
server.get("/login",(req,res)=>{
//(1)获取脚手架参数 uname upwd
var uname = req.query.uname;
var upwd = req.query.upwd;
//(2)创建sql语句查询
var sql = "SELECT id FROM ms_login WHERE uname = ? AND upwd = md5(?)";
//(3)执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
 if(err)throw err;
 //(4)获取执行结果
 //(5)判断查询是否成功 result.length
 if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"})
 }else{
   req.session.uid=result[0].id; 
   res.send({code:1,msg:"登录成功"})
 }
 //(6)将结果返回脚手架
})
})
   
//接收get  
// server.get("/product",(req,res)=>{
//   //接收两个参数
//   var pno=req.query.pno;
//   var ps=req.query.pageSize;
//   //设置默认值pno=1 pageSize=4
//   if(!pno){pno=1}
//   if(!ps){ps=4}
//   //计算第一问号值
//   var off=(pno-1)*ps;
//   //对pageSize转int
//   ps=parseInt(ps);
//   //创建sql语句
//   var sql="select lid,price,lname,img_url from ms_laptop limit ?,?"
//   //执行sql语句
//   pool.query(sql,[off,ps],(err,result)=>{
//     if(err)throw err;
//     res.send({code:1,msg:"查询成功",data:result})
//   })
// })
//功能三：将商品添加到购物车
// server.get("/addcart",(req,res)=>{
//   //获取登录凭证
//      var uid=req.session.uid;
//      if(!uid){
//        res.send({code:-1,msg:"请登录"})
//        return;
//      }
//      var lid=req.query.lid;
//      var lname=req.query.lname;
//      var price=req.query.price;
//      var sql = "select id from ms_cart where uid=? and lid=?"
//      pool.query(sql,[uid,lid],(err,result)=>{
//        if(err)throw err;
//        //插入新内容
//        if(result.length==0){
//           var sql=`insert into ms_cart values(null,${lid},1,'${lname}',${price},${uid})`;
//        }else{
//          //更新之前的内容
//           var sql=`update ms_cart set count=count+1 where uid=${uid} and lid=${lid}`;
//        }
//        pool.query(sql,(err,result)=>{
//          if(err)throw err;
//          res.send({code:1,msg:"添加成功"})
//        })
//      })
//     })
//功能四：查询购物车列表并将数据返回到shopping模块
// server.get("/findcart",(req,res)=>{
//   var uid=req.session.uid;
//   if(!uid){
//     res.send({code:-1,msg:"请登录"})
//     return;
//   }
//   var sql="select id,lid,price,lname,count from ms_cart where uid=?";
//   pool.query(sql,[uid],(err,result)=>{
//     if(err)throw err;
//     res.send({code:1,msg:"查询成功",data:result})
//   })
// })
//功能五：删除一个指定购物车中的商品
// server.get("/del",(req,res)=>{
//   //1:获取当前用户uid
//   var uid = req.session.uid;
//   //2:如果没有uid提示
//   if(!uid){
//    res.send({code:-1,msg:"请登录"});
//    return;
//   }  
//     //1:获取购物车id
//     var id = req.query.id;
//     //2:创建sql
//     var sql = "DELETE FROM ms_cart WHERE id = ?";
//     //3:执行
//     pool.query(sql,[id],(err,result)=>{
//       if(err)throw err;
//       if(result.affectedRows>0){
//         res.send({code:1,msg:"删除成功"})
//       }else{
//         res.send({code:-1,msg:"删除失败"});
//       }
//     })
//   });
  
//功能六：删除多个指定购物车中的商品
// server.get("/delm",(req,res)=>{
//   var uid = req.session.uid;
//   if(!uid){
//    res.send({code:-2,msg:"请登录"});
//    return;
//   }
//   //1:获取一组id 1,2
//   var id = req.query.id;
//   //2:创建sql
//   var sql = `DELETE FROM ms_cart WHERE id IN (${id})`;
//   //3:执行sql并且返回结果
//   pool.query(sql,(err,result)=>{
//     if(err)throw err;
//     if(result.affectedRows>0){
//       res.send({code:1,msg:"删除成功"});
//     }else{
//       res.send({code:-1,msg:"删除失败"});
//     }
//   })
// })