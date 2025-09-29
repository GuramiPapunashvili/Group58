const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config() ;
const app = express();

if(process.env.NODE_ENV === 'development' ){
    app.use(morgan("dev"))
}

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log('The server is running on port: ', process.env.PORT)
})