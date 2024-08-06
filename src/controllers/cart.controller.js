import CartService from "../service/cart.service.js";
import Controllers from "./class.controller.js";
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse()
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
        const data = await this.service.addProductToCart(cid, pid, quantity)
        if(!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
    } catch (error) {
        next(error)
    }
}
updateQuantity = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const { quantity } = req.body;
        const data = await this.service.updateProdQuantity(cid, pid, quantity);
        if(!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
    } catch (error) {
        next(error)
    }
}
deleteCarts = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const data = await this.service.deleteCartById(cid)
        if(!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
    } catch (error) {
        next(error)
    }
}

deleteProductFromCart = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const data = await this.service.deleteProdFromCart(cid, pid)
        if(!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
    } catch (error) {
        next(error)
    }
}

deleteAllProducts = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const data = await this.service.deleteAllProdCart(cid)
        if(!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
    } catch (error) {
        next(error)
    }
}
}