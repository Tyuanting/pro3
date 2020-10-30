const express=require('express');
const user=require('./router/user.js');
const products=require('./router/products.js');
const details=require('./router/details.js');
const Mindex=require('./router/m_index.js');

const bodyparser=require('body-parser');
const app=express();
app.listen(5050);

app.use( express.static('./pro'));
app.use( bodyparser.urlencoded({
    extended:false
}));

app.use('/user',user)
app.use('/index',products)
app.use('/details',details)
app.use('/mindex',Mindex)