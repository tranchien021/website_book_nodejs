const mysql = require('mysql')
var session = require('express-session')
const { createConnection } = require('mysql')
const read = require('body-parser/lib/read')
const { category } = require('./homeController')
const modemailer=require('nodemailer')
const randomstring  =require('randomstring')
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
    multipleStatements: true
})
exports.confirm_order = (req, res) => {

    // Table Shipping
    const {shipping_name,shipping_phone,shipping_email,shipping_address,shipping_district,shipping_province,shipping_notes,shipping_method,shipping_packet}=req.body
  
    var code_order=randomstring.generate(10);
    var user=req.session.user
    
    var cart=req.session.cart
    for(var i=0;i<cart.products.length;i++){
        let order_detail=cart.products[i]
        
        pool.getConnection((err, connection) => {
            connection.query('INSERT INTO order_detail SET order_code=?,product_id=?,product_name=?,product_price=? ',[code_order,order_detail.id,order_detail.name,order_detail.price],(err,rows)=>{
                if(err){
                    console.log('Lỗi tạo order_detail')
                }         
                                
            })
        })

    }
   
  
    // Table order and order detail 
    const sql='INSERT INTO orders SET customer_id= ?, shipping_id =?, order_status=?,order_code=? '

    pool.getConnection((err, connection) => {
        if (err) throw err;
       
        connection.query('INSERT INTO shipping SET shipping_name = ? ,shipping_phone = ?, shipping_email=?, shipping_address = ?, shipping_method=?,shipping_packet=?,shipping_notes=?,shipping_province=?,shipping_district=? ', [shipping_name,shipping_phone,shipping_email,shipping_address,shipping_method,shipping_packet,shipping_notes,shipping_province,shipping_district], (err, data_shipping) => {
            
            connection.query(sql,[user[0].id,data_shipping.insertId,'1',code_order],(err,rows)=>{
                if (err) throw err;
                else{
                    // Send email confirm order by nodemailer
                    let SendEmail=req.session.user[0].email
   
                    let transporter=modemailer.createTransport({
                        service:"gmail",
                        auth:{
                            user:"projectdoan21@gmail.com",
                            pass:"qlrpdxfbpdmndcxa",
                        },
                        tls:{
                            rejectUnauthorized:false,
                        }
                    })
                
                    let mailOptions={
                        from:"projectdoan21@gmail.com",
                        to:SendEmail,
                        subject:"Xác nhận đơn hàng ",
                        text:" Cảm ơn bạn đã đặt sách của shop MinhChien"
                    }
                    transporter.sendMail(mailOptions,function(err,success){
                        if(err) throw err
                        else{
                            console.log('Gửi email thành công ')
                            res.redirect('/')
                        }
                    })
                }
                                
            })

        })
    })
    
}

