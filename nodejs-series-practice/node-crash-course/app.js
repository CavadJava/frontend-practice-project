const express = require('express')

const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set("views", "myviews");

// listen for requests
app.listen(3000)

app.get("/", (req,resp)=>{
    // resp.sendFile('./old-views/index.html',{root:__dirname});
    resp.render("index")
});

app.get("/about", (req,resp)=>{
// resp.send("<p>Hello javad, welcome to mean stack</p>");
// resp.sendFile('./old-views/about.html',{root:__dirname});
    resp.render("about")
});


// redirects
app.get("/about-me", (req,resp)=>{
    resp.redirect("/about");
});

// 404 page
app.use((req, resp)=>{
    resp.render("404");
    // resp.sendFile("./old-views/404.html",{root:__dirname})
});