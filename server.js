const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const flash = require('connect-flash');
const path = require('path')
const router = require('./server/routes/router')

const connectDB = require('./server/database/connection')
const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080



//log request using morgan
app.use(morgan('tiny'))

//load splash message
app.use(flash())

//mogodb connection
connectDB()

//Parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set('view engine', 'ejs')

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

//load router
app.use('/',router)
app.listen(PORT,()=>{
    console.log(`Server is listing on port:- ${PORT}`)
})