var fs = require('fs');

fs.readFile('main.js', (req, res, err)=>{
    if(err) {
        console.log(err.stack);
    }
    console.log(res);
    console.log(__dirname)
});
