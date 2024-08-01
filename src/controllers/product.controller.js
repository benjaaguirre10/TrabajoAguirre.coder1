import ProductService from "../service/product.service.js"
import Controllers from "./class.controller.js";
import { createResponse } from "../utils.js";

const ProdService = new ProductService()


export default class ProductController extends Controllers{
    constructor(){
        super(ProdService)
    }

    getProdById = async(req, res, next)=>{
        try {
            const {id} = req.params;
            const data = await this.service.getProdById(id);
            return createResponse(res, 200, data)
        } catch (error) {
            next(error)
        }
    }

}