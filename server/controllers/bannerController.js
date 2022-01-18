const mysql=require('mysql')
require('dotenv').config()

const pool=mysql.createPool({
    connectionLimit:100,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:'',
    database:process.env.DB_NAME
})

exports.view=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
       
        connection.query('SELECT * FROM banner',(err,rows)=>{
            connection.release()
            if(!err){
                res.render('admin/banner/list',{layout:'layouts/main',banner:rows})
            }else{
                console.log(err)
            }
         
        })
    })
}
