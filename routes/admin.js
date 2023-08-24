const express = require('express');


const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();
const products = [];

router.use('/m',(req,res,next)=>{

    res.sendFile(path.join(rootDir,'views','product.html'));
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

router.use('/product',(req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
});

// module.exports =  router;
exports.routes = router;
exports.products = products; 