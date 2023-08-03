const express =  require('express');
const app =express();
const bodyparser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRouter);

app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});

const PORT = 3000;
app.listen(PORT,()=>console.log('server stared at port 5000'));