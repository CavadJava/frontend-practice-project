const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, resp) => {
    console.log('request made');
    resp.setHeader('Conteny-Type','text/plain')
    // resp.write('<head><link rel="stylesheet" href="#"></head>')
    // resp.write('<p> Hello ninjas</p>');
    // resp.write('<p> hello again, ninjas</p>');
    // resp.end();
    console.log(_.random(0,20))
    _.once(() => {
        console.log('--->hello')
    })();

    let path = './views/';
    switch(req.url) {
        case '/':
            path+='index.html'
            resp.statusCode = 200;
            break;
        case '/about':
            path+='about.html'
            resp.statusCode = 200;
            break;
        case '/about-me':
            path+='about.html'
            resp.statusCode = 301;
            break;
        default:
            path+='404.html';
            resp.statusCode = 404;
            break;
    }

    fs.readFile(path, function(err, data)  {
        if (err) {
            // resp.write("<!DOCTYPE html><html><head><meta charset='utf-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><title>Page Title</title><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' type='text/css' media='screen' href='main.css'><script src='main.js'></script></head><body><p>Hello javad.</p></body></html>");
            console.log(err);
            resp.end();
        } else {
            resp.write(data)
            // resp.write("<!DOCTYPE html><html><head><meta charset='utf-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><title>Page Title</title><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' type='text/css' media='screen' href='main.css'><script src='main.js'></script></head><body><p>Hello javad.</p></body></html>");
            resp.end();
        }
    });
});

server.listen(3000, '65.21.151.194', () => {
    console.log('listening for request on port 3000');
});