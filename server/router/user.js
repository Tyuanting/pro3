const express=require('express');
const pool=require('../pool.js')
const r=express.Router();

r.post('/register',(req,res)=>{
    
    var _uname=req.body.uname;
    var _upwd=req.body.upwd;
    // console.log(req.body)
    pool.query('select * from jy_user where uname=?',[_uname],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            pool.query('insert into jy_user set uname=?,upwd=?',[_uname,_upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');
        }else{
            res.send('0');
        }
    });
        }else{
            res.send('2');
        }
    });
    
});

r.post('/login',(req,res)=>{
    var _uname=req.body.uname;
    var _upwd=req.body.upwd;
    // console.log(req.body)
    pool.query('select * from jy_user where uname=? and upwd=?',[_uname,_upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send('0');
        }else{
            res.send('1');
        }
    });
});


module.exports=r;