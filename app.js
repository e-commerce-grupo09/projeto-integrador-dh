const express = require("express");
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>{
    return res.sendFile(__dirname + '/views/home.html')
});

app.get('/produtos',(req, res)=>{
    return res.sendFile(__dirname + '/views/produtos.html')
});

app.get('/carrinho',(req, res)=>{
    return res.sendFile(__dirname + '/views/carrinho.html')
});

app.get('/login',(req, res)=>{
    return res.sendFile(__dirname + '/views/login.html')
});

app.get('/sac',(req, res)=>{
    return res.sendFile(__dirname + '/views/sac.html')
});




app.listen(3000);