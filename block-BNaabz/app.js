var express = require('express');

var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/intro', (err)=>{
    console.log( err ? err : 'connecter to server');
})

var app = express();

app.use('/',(req,res)=>{
    res.send('welcome to Jungle')

})


app.listen(3000,()=>{
    console.log('server listening to 3000')
})