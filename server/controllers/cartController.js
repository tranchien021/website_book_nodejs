const mysql = require('mysql')
var session = require('express-session')
const read = require('body-parser/lib/read')
const Cart =require('../models/cart')
const { createConnection } = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
    multipleStatements: true
})
exports.cart=(req,res)=>{

    pool.getConnection((err, connection) => {
        if (err) throw err;
        const sql = `
            SELECT * FROM category WHERE parent = '0' AND status='1';
            SELECT * FROM category WHERE parent > '0' AND status='1';
        `
        connection.query(sql, (err, rows) => {
            connection.release()
            if (err) throw err;
            if(req.session.cart){
                res.render('web/cart',{layout:'layouts/home_not_ban',cart:req.session.cart,user:req.session.user,category:rows[0],sub_category:rows[1]})
            }else{
                res.render('web/cart',{layout:'layouts/home_not_ban',cart:req.session.cart,user:req.session.user,category:rows[0],sub_category:rows[1]})
            }
            
    

        })
    })


}

exports.addcart = (req, res) => {
    

    pool.getConnection((err, connection) => {
        if (err) throw err;
        // let cart = req.session.cart||[]
       
        connection.query('SELECT * FROM book WHERE id= ?', [req.body.id], (err, rows) => {
            connection.release()
            if (!err) {

                Cart.save(rows[0])                
                req.session.cart=Cart.getCart()
              
                res.redirect('/cart')

            } else {
                console.log(err)
            }

        })
    })
  

}

exports.delete_cart = (req, res) => {
    Cart.delete(req.params.id)
    req.session.cart=Cart.getCart()
    res.redirect('/cart')

    
}







