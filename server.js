const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const { engine } = require('express-handlebars');
const userRouters=require('./server/routers/user')
const homeRouters=require('./server/routers/home')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts');
const fileUpload=require('express-fileupload')
const modemailer=require('nodemailer')
const randomstring  =require('randomstring')

const app = express()
const port = process.env.PORT || 3000
var path = require("path");

require('dotenv').config()
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({extended:false,limit:'10mb'}))

app.set('view engine', 'ejs')
app.use(expressLayouts);

app.use(express.static('public'))
app.set('layout','layouts/home','layouts/home_not_ban')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// Connect Database
const pool=mysql.createPool({
    connectionLimit:100,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:'',
    database:process.env.DB_NAME
})
pool.getConnection((err,connection)=>{
    if(err) throw err;
    console.log('Kết nối ID '+connection.threadId)
})

app.use('/admin',userRouters)
app.use('/',homeRouters)
app.use(express.static(path.join(__dirname, "public")));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Lắng nghe cổng 
app.listen(port, () => console.log(`Đang lắng nghe cổng ${port}`))

