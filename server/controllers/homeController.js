const mysql = require('mysql')
var session = require('express-session')
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
    multipleStatements: true
})
exports.home = (req, res) => {
    
        pool.getConnection((err, connection) => {
            // status = 1 Hiển thị sản phẩm 
            // material = combo Hiển thị combo sách hot 25 % 
            // status = 3 Sách sắp ra mắt, đặt trước
            // status = 4 Sách hay nên đọc    
             if (err) throw err;
             const sql=  `SELECT * FROM book WHERE material = 'book' AND status='1'; 
                          SELECT * FROM book WHERE material = 'combo' AND status='1';
                          SELECT * FROM banner;
                          SELECT * FROM category WHERE parent = '0' AND status='1';
                          SELECT * FROM category WHERE parent > '0' AND status='1';
                          SELECT * FROM book WHERE material = 'book' AND status='3';
                          SELECT * FROM book WHERE material = 'book' AND status='4';
                          
             `
             connection.query(sql, (err, rows) => {
                 connection.release()
                 if (!err) {
                     res.render('web/layout', {data: rows[0],user:req.session.user, banner:rows[2],combo:rows[1],category:rows[3],sub_category:rows[4],book_coming:rows[5],book_good:rows[6] })
                    
                 } else {
                     console.log(err)
                 }
                
             })
           
         })
     
   
  
   


}
exports.detail = (req, res) => {
    const sql=` SELECT * FROM book WHERE slug=?;
                SELECT * FROM category WHERE parent = '0' AND status='1';
                SELECT * FROM category WHERE parent > '0' AND status='1';
    
    `
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Kết nối ID ' + connection.threadId)
        connection.query(sql, [req.params.slug], (err, rows) => {
            connection.release()
            if (!err) {
                res.render('web/detail_product', { layout: 'layouts/home_not_ban' ,data:rows[0],user:req.session.user,category:rows[1],sub_category:rows[2]})

            } else {
                console.log(err)
            }

        })
    })
}

exports.login = (req, res) => {
    const { email, password } = req.body
    pool.getConnection((err, connection) => {
        if (err) throw err;
        if (email && password) {
            connection.query('SELECT * FROM customer WHERE email = ? AND password = ?', [email, password], (err, rows) => {
                connection.release()
                if (!err) {
                    req.session.user=rows
                   
                    res.redirect('/')
                } else {
                    console.log(err)
                }

            })
        }

    })


}
exports.register = (req, res) => {
    const {name,phone,email, password,confirm_password } = req.body
    pool.getConnection((err, connection) => {
        if (err) throw err;
       
        connection.query('SELECT * FROM customer WHERE email=? ',[email],(err,rows)=>{
            if(rows==''){
               if (password == confirm_password ) {
                    connection.query('INSERT INTO customer  SET name = ? ,phone = ?, email=?, password = ? ', [name,phone,email,password], (err, rows) => {
                        connection.release()
                        if (!err) {
                            connection.query('SELECT * FROM customer WHERE email= ?',[email],(err,rows)=>{
                               if(!err){
                                req.session.user=rows
                                res.redirect('/')
                               }
                               else{
                                   console.log(err)
                               }
                                
                            })
                          
                        } else {
                            console.log(err)
                        }
        
                    })
                }else{
                    console.log('Nhập lại password và confirm password')
                }


            }else{
                console.log('Đã tồn tại username')
                
                res.redirect('/')
            }
            
        })
        

    })


}
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/')
}

exports.find = (req, res) => {
    let find='%'+req.body.find+'%'
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM book WHERE name LIKE ?', [find], (err, rows) => {
            connection.release()
            if (!err) {
                res.render('web/find', { layout: 'layouts/home_not_ban', book : rows,user:req.session.user })
                

            } else {
                console.log(err)
            }

        })
    })
}
exports.category = (req, res) => {
    let id=req.params.id

    const sql=` SELECT * FROM book WHERE category_id = ?; 
                SELECT * FROM category WHERE parent = '0' AND status='1';
                SELECT * FROM category WHERE parent > '0' AND status='1';
    `
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sql, [id], (err, rows) => {
            connection.release()
            if (!err) {
                res.render('web/category_detail', { layout: 'layouts/home_not_ban', book : rows[0] ,user:req.session.user,category:rows[1],sub_category:rows[2]})
                

            } else {
                console.log(err)
            }

        })
    })
}


exports.account = (req, res) => {
  
    const id=req.session.user[0].id
    const sql=`
                SELECT * FROM category WHERE parent = '0' AND status='1';
                SELECT * FROM category WHERE parent > '0' AND status='1';
                SELECT * FROM orders WHERE customer_id = ?;
    `
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sql,[id], (err, rows) => {
            connection.release()
            if(err) throw err 
            if (req.session.user) {
                res.render('web/account', { layout: 'layouts/home_not_ban',user:req.session.user,category:rows[0],sub_category:rows[1],history:rows[2]})
                

            } else {
                res.render('web/account', { layout: 'layouts/home_not_ban',user:req.session.user,category:rows[0],sub_category:rows[1],history:rows[2]})
            }

        })
    })
}

