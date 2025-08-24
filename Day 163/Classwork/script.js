const http = require("http");
const fs = require('fs')

const htmlContent = fs.readFileSync('./index.html', 'utf-8')
const HomeContent = fs.readFileSync('./Home.html', 'utf-8')
const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/'){
        res.end(htmlContent)
    } else if(url === '/Home'){
        res.end(HomeContent)
    } else {
        res.end("<h1>404 Not Found</h1>")
    }
    
    
})

server.listen(3000, () => {

})