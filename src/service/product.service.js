import productsDaoMongoDB from "../persistence/dao/mongodb/product.dao.js";
import Services from "./class.service.js";
import productRepository from "../persistence/repository/product.res.repository.js";
const prodRepository = new productRepository();
const productDao = new productsDaoMongoDB();

export default class ProductService extends Services{
    constructor(){
        super(productDao);
    }
    getProdById = async(id) =>{
        try {
            return await prodRepository.getProdById(id) 
        } catch (error) {
            throw new Error(error)
        }
    }
}