import cartDaoMongoDb from "../persistence/dao/mongodb/cart.dao.js"
const cartDao = new cartDaoMongoDb()
import productsDaoMongoDB from "../persistence/dao/mongodb/product.dao.js";
import Services from "./class.service.js";
const productDao = new productsDaoMongoDB();

export default class CartServices extends Services {
    constructor() {
        super(cartDao);
    }

    addProductToCart = async (cartId, productId, quantity) => {
        try {
            const existCart = await getCartbyId(cartId);
            const existProd = await productDao.getProductsById(productId);
            if (!existCart || !existProd) return null;
            return await cartDao.addProduct(cartId, productId, quantity)
        } catch (error) {
            throw new Error(error);
        }
    }
    updateProdQuantity = async (cartId, productId, quantity) => {
        try {
            const existCart = await getCartbyId(cartId);
            const existProd = await productDao.getProductsById(productId);
            if (!existCart || !existProd) return null;
            return await cartDao.updateProdQuantity(cartId, productId, quantity);
        } catch (error) {
            throw new Error(error)
        }
    }

    deleteProdFromCart = async (cartId, productId) => {
        try {
            const existCart = await getCartbyId(cartId);
            console.log(existCart);
            const existProd = await productDao.getProductsById(productId);
            if (!existCart || !existProd) return null;
            return await cartDao.deleteProduct(cartId, productId);
        } catch (error) {
            throw new Error(error)
        }
    }
    deleteAllProdCart = async (cartId) => {
        try {
            const existCart = await getCartbyId(cartId);
            if (!existCart) return null;
            return await cartDao.deleteAllprodCart(cartId)
        } catch (error) {
            throw new Error(error)
        }
    }
}