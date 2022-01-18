const mysql=require('mysql')
require('dotenv').config()

const pool=mysql.createPool({
    connectionLimit:100,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:'',
    database:process.env.DB_NAME
})

exports.category=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
       
        connection.query('SELECT * FROM category',(err,rows)=>{
            connection.release()
            if(!err){
                res.render('admin/category/list',{layout:'layouts/main',category:rows})
            }else{
                console.log(err)
            }
         
        })
    })
}
exports.add=(req,res)=>{
  
     res.render('admin/category/add_category',{layout:'layouts/main'})
            
}
exports.create=(req,res)=>{


    const {name,slug,description,parent,status}=req.body
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log('Kết nối ID '+ connection.threadId)
     
        connection.query('INSERT INTO category SET name= ?,slug = ?, description= ?, parent = ?, status= ?',[name,slug,description,parent,status],(err,rows)=>{
            connection.release()
            if(!err){
               res.redirect('/admin/category')
            }else{
                console.log(err)
            }
        })
    })
}