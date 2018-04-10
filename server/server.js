const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/react';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('mongo ');
});

const User = mongoose.model('user' , new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))

// User.create({
//     user: 'react',
//     age: 18
// }, function(err, doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// })

const app = express();

app.get('/', function(req,res){
    res.send('<h1>Hello express!</h1>');
});

app.get('/data', function(req,res){
    User.find({}, function(err,doc){
        res.json(doc);
    })
});

app.listen(9093, function(){
    console.log('at port 9093');
})