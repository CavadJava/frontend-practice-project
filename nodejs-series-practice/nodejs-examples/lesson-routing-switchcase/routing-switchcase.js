const http = require('http');

http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '' :
        case '/' :
                res.writeHead(200, {'Content-Type':'text/plain'}).end("HOME PAGE");
            break;
        case '/about':
                res.writeHead(200, {'Content-Type':'text/plain'}).end("ABOUT PAGE");
            break;
        default :
            res.writeHead(404, {'Content-Type':'text/plain'}).end("Not Found")
            break;
    }
}).listen(3000)

console.log('Server started on 65.21.151.194:3000; press Ctrl-C to terminate....');