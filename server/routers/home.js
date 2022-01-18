const express=require('express')
const router=express.Router()
const homeController=require('../controllers/homeController')
const cartController=require('../controllers/cartController')
const checkoutController=require('../controllers/checkoutController')

router.get('/',homeController.home)
router.get('/detail_product/:slug',homeController.detail)
router.post('/',homeController.login)
router.post('/register',homeController.register)
router.get('/logout',homeController.logout)
router.post('/find',homeController.find)
router.get('/cart',cartController.cart)
router.post('/add_cart_ajax',cartController.addcart)
router.post('/checkout',checkoutController.confirm_order)
router.get('/category/:id',homeController.category)
router.get('/delete_cart/:id',cartController.delete_cart)
router.get('/account',homeController.account)




module.exports=router