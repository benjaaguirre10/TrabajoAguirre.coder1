import CartService from "../service/cart.service.js";
import Controllers from "./class.controller.js";

const cartService = new CartService()

export default class CartController extends Controllers{
    constructor(){
        super(cartService)
    }

addProductToCart = async (req, res, next) => {
    try {
        const pid = req.params.pid;
        const cid = req.params.cid;
        const { quantity } = req.body
        console.log(pid, cid, quantity);
        const producto = await this.service.addProductToCart(cid, pid, quantity)
        res.send(producto)
    } catch (error) {
        next(error)
    }
}
updateQuantity = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const { quantity } = req.body;
        const cart = await this.service.updateProdQuantity(cid, pid, quantity);
        res.send(cart)
    } catch (error) {
        next(error)
    }
}
deleteCarts = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const deleteCart = await this.service.deleteCartById(cid)
        res.status(200).json({ msg: "Cart delete succesfully" });
    } catch (error) {
        next(error)
    }
}

deleteProductFromCart = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const cart = await this.service.deleteProdFromCart(cid, pid)
        res.send(cart)
    } catch (error) {
        next(error)
    }
}

deleteAllProducts = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const cart = await this.service.deleteAllProdCart(cid)
        res.send(cart)
    } catch (error) {
        next(error)
    }
}
}