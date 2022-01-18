
let cart = null

module.exports = class Cart {
    static save(product) {

        if (cart === null) {
            cart = { products: [], totalPrice: 0 };
        }

        const index = cart.products.findIndex(p => p.id == product.id)
       
        if (index >= 0) {
            const existProduct = cart.products[index]
            existProduct.qty++;
        } else {
            product.qty = 1
            cart.products.push(product)
        }
        cart.totalPrice += product.price
       
    }
    static getCart() {
        return cart;
    }
    static delete(productId){
        const isExisting=cart.products.findIndex(p=>p.id==productId)
        if(isExisting >= 0){
            const deleteProduct=cart.products[isExisting]
            cart.totalPrice -= deleteProduct.price * deleteProduct.qty
            cart.products.splice(isExisting,1)
        }
       
       
       
    }
        
}
    
