const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const postRouter = require('./router/post.router')

dotenv.config() ;

const app = express();

app.use(express.json())

app.use('/api/posts', postRouter)

if(process.env.NODE_ENV === 'development' ){
    app.use(morgan("dev"))
}

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('connected to mongoDB')

        app.listen(process.env.PORT, () => {
            console.log('the server is running on port: ', process.env.PORT)
        })
    })
    .catch(err => {
        console.log('error', err)

        process.exit(1)
    })