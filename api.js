const fs = require("fs");
const http=require('http');
const url = require('url');
const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName ==='/Home' || pathName ==='/'){
        res.end('welcome to Homepage')
    }else if(pathName ==='/contact'){
        res.end('Here you can find all our contact details contact')
    }else if(pathName ==='/api'){
        fs.readFile('./data.json','utf-8',(err,data)=>{
            const productData=JSON.parse(data);
            res.writeHead(200,{'content-type':'application/json'})
            res.end(data);
        })
    }
    
});
server.listen(7000,'127.0.0.1',() => {
    console.log('listening to port at 7000');
});