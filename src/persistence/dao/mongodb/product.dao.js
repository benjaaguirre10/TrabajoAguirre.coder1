import { productModel } from "./models/product.model.js";
import MongoDao from "./mongo.dao.js";


export default class productsDaoMongoDB extends MongoDao {
    constructor(){
        super(productModel);
    }
    async createMock(obj){
        try {
            return this.model.create(obj)
        } catch (error) {
            
        }
    }
}




