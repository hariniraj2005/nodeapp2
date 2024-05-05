const http=require('http');
const fs=require('fs')
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        let messages = []; 
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<ul style="list-style-type:none;">');
        messages.forEach(message => {
            res.write(`<li>${message}</li>`);
        });
        res.write('</ul>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==='/message'&& method==='POST'){
        fs.writeFileSync('message.txt','hello!welcome')
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end();
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
       res.write('<head>');
       res.write('<title>My First Page</title>');
       res.write('</head>');
       res.write('<body>');
       res.write('<h1>Hello from my Node.js Server </h1>');
       res.write('</body>');
       res.write('</html>');
       res.end()
})
server.listen(3000);