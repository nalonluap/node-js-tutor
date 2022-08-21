const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Hello world!')
    }
    if(req.url === '/about'){
        res.end('This page is about...')
    }
})

server.listen(5000)
