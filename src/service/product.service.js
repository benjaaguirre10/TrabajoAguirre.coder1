import productsDaoMongoDB from "../persistence/dao/mongodb/product.dao.js";
import Services from "./class.service.js";
import productRepository from "../persistence/repository/product.res.repository.js";
import { generateUser } from "../utils/user.utils.js";
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
    createMock = async(cant = 100)=>{
        try {
            const arrayUser = [];
            for (let i = 0; index < cant; i) {
                const user = generateUser()
                arrayUser.push(user);
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}