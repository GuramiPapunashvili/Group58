const http = require('http')
const fs = require('fs')
const random = Math.floor(Math.random() * 3)
const urls = ['/','/Contact','/Info']
const server = http.createServer((req,res) => {
    const url = urls[random]

    if (url === '/'){
        res.end(fs.readFileSync('./Home.html'), 'utf-8')
    } else if (url === '/Contact'){
        res.end(fs.readFileSync('./Contact.html', 'utf-8'))
    } else if(url === '/Info'){
        res.end(fs.readFileSync('./Info.html', 'utf-8'))
    } else {
        res.end('Error 404')
    }
})

server.listen(3000, () => {
    
})