var express = require('express');
var mongoose = require('mongoose');
var User = require('./model/user')


mongoose.connect(
    "mongodb://localhost/assignment2",
    {  useNewUrlParser: true, useUnifiedTopology: true  },
    (err) => {
        console.log(err ? err : "connected true")
    }
)

var app = express();

app.get('/',(req,res)=>{
    res.send('welcome');
})

app.use(express.json())


app.post('/users',(req,res)=>{
    console.log(req.body)

    User.create(req.body,(err,user)=>{
      res.json(err,user)
    })

})

app.listen(2000,() => {
    console.log('server is listening on port 2K')
})



