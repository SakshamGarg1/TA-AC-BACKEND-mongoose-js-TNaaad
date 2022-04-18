var express = require('express');

var mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost/Schema",
    (err)=>{
        console.log(err ? err: " connect true")
})


var app = express();

app.get('/',(req,res)=>{
    res.send('weolcome')
})

app.listen(3000,()=>{
    console.log('server working on 3000')
})