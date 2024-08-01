import {userModel} from "./models/user.model.js"
import MongoDao from "./mongo.dao.js"


export default class UserDao extends MongoDao{
    constructor(){
        super(userModel)
    }
    
    async getByEmail(email){
        try {
            return await this.model.findOne({ email })
        } catch (error) {
            throw new Error(error)
        }
    }
    async getUserById(id){
        try {
            return await this.model.findById(id).populate("cart"); 
        } catch (error) {
            throw new Error(error)
        }
    }

}

