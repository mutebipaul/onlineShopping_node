const express =  require('express');
const app =express();
const bodyparser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');
app.set('view-engine','pug');
app.set('view','view'); 


app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use(adminData.routes);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

const PORT = 3000;
app.listen(PORT,()=>console.log('server stared at port 5000'));