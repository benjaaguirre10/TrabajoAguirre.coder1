import { Router } from "express";
import productRouter from './product.router.js';
import cartRouter from './cart.router.js';
import userRouter from "./user.router.js";


export default class MainRouter{
    constructor(){
        this.router = Router();
        this.init();
    }
    init(){
        this.router.use('/api/product', productRouter);
        this.router.use('/api/cart', cartRouter);
        this.router.use('/api/user', userRouter);
    }
    getRouter(){
        return this.router;
    }
}





