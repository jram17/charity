const express = require('express');
const app=express();
const port=4500;

app.set('view engine','ejs');
app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static("js"));


app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/t&c',(req,res)=>{
    res.render("t&c");
});

app.get('/events',(req,res)=>{
    res.render("events");
});
app.get('/community',(req,res)=>{
    res.render("community");
});

app.get('/login-sign',(req,res)=>{
    res.render("login-sign");
});


app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/index',(req,res)=>{
    res.render("index");
});


app.listen(port,()=>{
    console.log(`the server is running at port:${port}`);
});