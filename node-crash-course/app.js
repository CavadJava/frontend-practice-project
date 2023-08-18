const express = require('express')

const app = express();


// listen for requests
app.listen(3000)

app.get("/", (req,resp)=>{
    resp.sendFile('./views/index.html',{root:__dirname});
});
app.get("/about", (req,resp)=>{
// resp.send("<p>Hello javad, welcome to mean stack</p>");
resp.sendFile('./views/about.html',{root:__dirname});
});