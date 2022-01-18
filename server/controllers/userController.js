const mysql=require('mysql')
const fileUpload=require('express-fileupload')
require('dotenv').config()

const pool=mysql.createPool({
    connectionLimit:100,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:'',
    database:process.env.DB_NAME,
    multipleStatements: true
})

exports.view=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log('Kết nối ID '+ connection.threadId)
        connection.query('SELECT * FROM book',(err,rows)=>{
            connection.release()
            if(!err){
                res.render('admin/home',{layout:'layouts/main',rows})
            }else{
                console.log(err)
            }
            console.log("dữ liệu được lấy từ table book",rows)
        })
    })
}
exports.find=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log('Kết nối ID '+ connection.threadId)
        let search='%'+req.body.search+'%'
        connection.query('SELECT * FROM book WHERE name OR price LIKE ?',[search],(err,rows)=>{
            connection.release()
            if(!err){
                res.render('admin/home',{rows})
            }else{
                console.log(err)
            }
            console.log("dữ liệu được lấy từ table book",rows)
        })
    })
}
exports.add=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
      
        connection.query('SELECT * FROM category',(err,rows)=>{
            connection.release()
            if(!err){
                res.render('admin/add_user',{layout:'layouts/main',category:rows})
            }else{
                console.log(err)
            }
        })
    })
   
}
exports.edit=(req,res)=>{
   
    pool.getConnection((err,connection)=>{
        if(err) throw err;
      
        connection.query('SELECT * FROM book WHERE id =?;SELECT * FROM category ',[req.params.id],(err,rows)=>{
            connection.release()
            if(!err){
                res.render('admin/edit_user',{layout:'layouts/main',datas:rows[0],category:rows[1]})
            }else{
                console.log(err)
            }
        })
    })
   
}

exports.create=(req,res)=>{

    let sampleFile
    let uploadPath

    if(!req.files || Object.keys(req.files).length===0){
        console.log('Không có image trong file ')
    }
    
    sampleFile=req.files.sampleFile
    uploadPath= './public/images/' + sampleFile.name
    

    sampleFile.mv(uploadPath,function(err){
        if(err) throw err
    
    })

    const {name,slug,author,cost,discount,material,price,category,status}=req.body
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log('Kết nối ID '+ connection.threadId)
     
        connection.query('INSERT INTO book SET name= ?,discount = ?, material= ?, cost = ?, author= ?, slug = ?, image= ? , price= ?,category_id=?,status=?',[name,discount,material,cost,author,slug,sampleFile.name,price,category,status],(err,rows)=>{
            connection.release()
            if(!err){
               res.redirect('/admin')
            }else{
                console.log(err)
            }
        })
    })
}
exports.update=(req,res)=>{
    const {name,image,slug,author,cost,discount,material,price,category,status}=req.body
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log('Kết nối ID '+ connection.threadId)
     
        connection.query('UPDATE book  SET  name= ?,discount = ?, material= ?, cost = ?, author= ?, slug = ?, image= ? , price= ?, category_id=?, status=?  WHERE id =?',[name,discount,material,cost,author,slug,image,price,category,status,req.params.id],(err,rows)=>{
            connection.release()
            if(!err){
              res.redirect('/admin')
            }else{
                console.log(err)
            }
        })
    })
}

exports.delete=(req,res)=>{
   
    pool.getConnection((err,connection)=>{
        if(err) throw err;
       
        connection.query('DELETE FROM book WHERE id= ?',[req.params.id],(err,rows)=>{
            connection.release()
            if(!err){
               res.redirect('/admin')
            }else{
                console.log(err)
            }
        })
    })
}
exports.detail=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
      
        connection.query('SELECT * FROM book WHERE id =? ',[req.params.id],(err,rows)=>{
            connection.release()
            if(!err){
                res.render('admin/view_user',{rows})
            }else{
                console.log(err)
            }
            console.log(rows)
        })
    })
    
}
exports.home=(req,res)=>{
  res.render('web/layout')
    
}
