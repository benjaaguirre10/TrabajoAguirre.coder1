import { productModel } from "./models/product.model.js";
import MongoDao from "./mongo.dao.js";


export default class productsDaoMongoDB extends MongoDao {
    constructor(){
        super(productModel);
    }
}




