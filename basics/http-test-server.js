let http = require('http')

let ourApp = http.createServer(function(req, res) {
    if(req.url == '/') {
        res.end('Hello welcome to our home page')
    } 

    if(req.url == '/about') {
        res.end('Thank you for your interest :-)')
    }
    
    res.end('We cannot find the page your looking for')
})

ourApp.listen(3000)
