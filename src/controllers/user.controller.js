import UserService from "../service/user.services.js";
import Controllers from "./class.controller.js";
const userService = new UserService();
import { createResponse } from "../utils.js";

export default class UserController extends Controllers{
    constructor(){
        super(userService)
    }
    register = async(req, res, next) =>{
        try {
          console.log(req.body);
          const data = await this.service.register(req.body);
          !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
        } catch (error) {
          next(error);
        }
      };
    
      login = async(req, res, next) =>{
        try {
         const token = await this.service.login(req.body);
         res.header('Authorization', token);
         !token ? createResponse(res, 404, token) : createResponse(res, 200, token);
        } catch (error) {
          next(error);
        }
      };
    
      profile =async(req, res, next)=>{
        try {
         if(req.user){
          const { _id } = req.user;
          const user = await this.service.getUserById(_id);
          createResponse(res, 200, user)
         } else createResponse(res, 401, { msg: 'Unhautorized' })
        } catch (error) {
          next(error);
        }
      };
    
}