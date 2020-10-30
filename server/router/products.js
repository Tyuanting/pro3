const express=require('express');
const pool=require('../pool.js')
const r=express.Router();
/*类目菜单 */
r.get('/bnav',(req,res)=>{
    pool.query('select * from banner_nav',(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
/*轮播图接口*/
r.get('/carousel',(req,res)=>{
    pool.query('select * from jy_index_carousel',(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
r.get('/category',(req,res)=>{
    pool.query('select * from product_category',(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    })
});

r.get('/sel',(req,res)=>{
    let cid = req.query.cid;
    pool.query('select title,details,price,pic,pid from jy_index_product where category_id = ?',[cid],(err,result)=>{
        if (err) throw err;
        res.send(result);
    })
})
//电视机
r.get('/tv',(req,res)=>{
    var _title=req.params.title;
    var _details=req.params.details;
    var _price=req.params.price;
    pool.query('select * from jy_index_product where category_id=1',(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    });
});
//空调
r.get('/air',(req,res)=>{
    // var _title=req.params.title;
    // var _details=req.params.details;
    // var _price=req.params.price;
    pool.query('select * from jy_index_product where category_id=3',(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    });
});
//冰箱
r.get('/ref',(req,res)=>{
    // var _title=req.params.title;
    // var _details=req.params.details;
    // var _price=req.params.price;
    pool.query('select * from jy_index_product where category_id=4',(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    });
});
//洗衣机
r.get('/wash',(req,res)=>{
    // var _title=req.params.title;
    // var _details=req.params.details;
    // var _price=req.params.price;
    pool.query('select * from jy_index_product where category_id=5',(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    });
});

r.get('/',(req,res)=>{
    var kw = req.query.kw;
    // console.log(kw);
    let sql=`select * from jy_index_product where title like '%${kw}%'`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    })
})

r.get('/product',(req,res)=>{
    var cid = req.query.cid;
    // console.log(kw);
    let sql=`select * from jy_index_product where category_id=?`;
    pool.query(sql,[cid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    })
})

r.get('/show',(req,res)=>{
    let sql=`select * from jy_index_product where isIndex=1`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result)
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    })
})

//获取搜索的数据
r.get('/search',(req,res)=>{
	//获取前台传来的搜索条件
	let q=req.query.q;
	q='%'+q+'%';
	let sql="SELECT * FROM jy_index_product WHERE title LIKE ?";
	pool.query(sql,[q],(err,result)=>{
		if(err) throw err;
		//返回原来的查询记录的数据及总页数信息
		res.send({message:'查询成功',code:1,results:result});   
	})

})


module.exports=r;