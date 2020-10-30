const express=require('express');
const pool=require('../pool.js')
const r=express.Router();

r.get('/',(req,res)=>{
    var pid=req.query.pid
    pool.query('select * from jy_index_product where pid=?',[pid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

module.exports=r;