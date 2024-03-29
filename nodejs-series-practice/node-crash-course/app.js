const express = require('express')
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');

const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set("views", "myviews");

// listen for requests
app.listen(3000)
app.use((req,resp,next) => {
    console.log('new request made:');
    console.log('host:',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next()
})

app.get("/", (req,resp)=>{
    // resp.sendFile('./old-views/index.html',{root:__dirname});
    const blogs = [
        {title:'Yoshi finds eggs',snippet:'Lorem ipsum dolar sit amet consectetur'},
        {title:'Mario finds eggs',snippet:'Lorem ipsum dolar sit amet consectetur'},
        {title:'How to defeat browser',snippet:'Lorem ipsum dolar sit amet consectetur'}
    ]
    resp.render("index", {title : 'Home', blogs})
});
app.get('/list-users',(req,resp)=>{

// let parsedUrl = url.parse(req.url);
// let parsedQs = querystring.parse(parsedUrl.query);
// console.log(parsedQs);

    fs.readFile(__dirname+"/"+"users.json",(err,data)=>{
        resp.header("Content-Type",'application/json');
        console.log(req.query.name);

        resp.end("Name:"+req.query.name+", Age:"+req.query.age);
    })
    for (const key in req.query) {
        console.log(key, req.query[key])
    }
})
app.get('/list-users/:name/:age',(req,resp)=>{
    fs.readFile(__dirname+"/"+"users.json",(err,data)=>{
        resp.header("Content-Type",'application/json');
        resp.end("name:"+req.params.name+", age:"+req.params.age);
    })
})

app.get("/about", (req,resp)=>{
// resp.send("<p>Hello javad, welcome to mean stack</p>");
// resp.sendFile('./old-views/about.html',{root:__dirname});
    resp.render("about", {title : 'About'})
});

app.get("/blogs/create", (req,resp)=>{
    resp.render("create", {title : 'Create a new blog'})
})



// redirects
app.get("/about-me", (req,resp)=>{
    resp.redirect("/about")
});

// 404 page
app.use((req, resp)=>{
    resp.render("404", {title : '404'});
    // resp.sendFile("./old-views/404.html",{root:__dirname})
});