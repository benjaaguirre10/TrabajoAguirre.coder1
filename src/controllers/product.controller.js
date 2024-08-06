import ProductService from "../service/product.service.js"
import Controllers from "./class.controller.js";
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse()

const ProdService = new ProductService()


export default class ProductController extends Controllers {
    constructor() {
        super(ProdService)
    }

    getProdById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await this.service.getProdById(id);
            if (!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
        } catch (error) {
            next(error)
        }
    }
    createMock = async(req, res, next)=>{
        try {
            const cant = req.query
            const data = this.service.createMock(cant)
            if (!data) return httpResponse.notFound(res, data)
                else return httpResponse.Ok(res, data)
        } catch (error) {
            next(error)
        }
    }

}