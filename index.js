const express = require("express");

const app = express();

app.use(express.static(__dirname +('public')));

servidor.get('/produto',(req, res)=>{
    res.sendFile(__dirname + '/views/produto.html')
});

servidor.get('/carrinho',(req, res)=>{
    res.sendFile(__dirname + '/views/carrinho.html')
});

servidor.listen(3000);