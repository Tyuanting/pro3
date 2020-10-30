const express=require('express');
const pool=require('../pool.js')
const r=express.Router();

// 主页面大图-3部分
r.get('/one',(req,res)=>{
  pool.query('select * from jy_index_mobile_one',(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }
  })
})
r.get('/two',(req,res)=>{
  pool.query('select * from jy_index_mobile_two',(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }
  })
})
r.get('/three',(req,res)=>{
  pool.query('select * from jy_index_mobile_three',(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }
  })
})
//分类的图片
r.get('/cate',(req,res)=>{
  pool.query('select * from product_category_mobile',(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }
  })
})
// 移动端轮播图
r.get('/swipe',(req,res)=>{
  pool.query('select * from jy_index_carousel_m',(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }
  })
})

//分类页的导航条
r.get('/category',(req,res)=>{
  pool.query('select * from product_cate_m',(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }
  })
})

module.exports=r;