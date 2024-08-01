import productsDaoMongoDB from "../dao/mongodb/product.dao.js";
import productResDto from "../dto/product.res.dto.js";
const productDao = new productsDaoMongoDB();


export default class productRepository{
    constructor(){
        this.dao = productDao;
    }
    async getProdById(id){
        try {
            const prod = await this.dao.getById(id)
            return new productResDto(prod)
        } catch (error) {
            throw new Error(error)
        }
    }
}