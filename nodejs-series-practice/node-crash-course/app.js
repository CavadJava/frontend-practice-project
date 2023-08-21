const express = require('express')

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
        // {title:'Title-1',snippet:'Mario1'},
        // {title:'Title-2',snippet:'Mario2'},
        // {title:'Title-3',snippet:'Mario3'}
    ]
    resp.render("index", {title : 'Home', blogs})
});

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