const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const bannerController=require('../controllers/bannerController')
const categoryController=require('../controllers/categoryController')

router.get('/',userController.view)
router.post('/',userController.find)
router.get('/adduser',userController.add)
router.post('/adduser',userController.create)
router.get('/edituser/:id',userController.edit)
router.post('/edituser/:id',userController.update)
router.get('/deleteuser/:id',userController.delete)
router.get('/viewuser/:id',userController.detail)
router.get('/layout',userController.home)
router.get('/banner',bannerController.view)


router.get('/category',categoryController.category)
router.get('/add_category',categoryController.add)
router.post('/add_category',categoryController.create)




module.exports=router