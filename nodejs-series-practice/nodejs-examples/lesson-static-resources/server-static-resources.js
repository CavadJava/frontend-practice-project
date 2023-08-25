const http = require('http');
const fs = require('fs')

function serverStaticFile(res, path, contentType, responseCode){
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname+path, function(err, data){
        if(err) {
            res.writeHead(500, {'Content-Type' : 'text/plain'})
            res.end();
        } else {
            res.writeHead(responseCode, {'Content-Type': contentType})
            res.end(data);
        }
    })
}

http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '' :
        case '/' :
            serverStaticFile(res, '/public/home.html','text-plain')
            break;
        case '/about':
            serverStaticFile(res, '/public/home.html','text-plain')
            break;
        default :
        serverStaticFile(res, '/public/404.html','text-plain',404)
        break;
    }
}).listen(3000)