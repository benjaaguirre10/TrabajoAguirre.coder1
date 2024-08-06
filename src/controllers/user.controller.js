import UserService from "../service/user.services.js";
import Controllers from "./class.controller.js";
import { HttpResponse } from "../utils/http.response.js";

const httpResponse = new HttpResponse();
const userService = new UserService();


export default class UserController extends Controllers {
  constructor() {
    super(userService)
  }
  register = async (req, res, next) => {
    try {
      console.log(req.body);
      const data = await this.service.register(req.body);
      if (!data) return httpResponse.notFound(res, data)
      else return httpResponse.Ok(res, data)
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const token = await this.service.login(req.body);
      res.header('Authorization', token);
      if (!token) return httpResponse.notFound(res, token)
      else return httpResponse.Ok(res, token)
    } catch (error) {
      next(error);
    }
  };

  profile = async (req, res, next) => {
    try {
      if (req.user) {
        const { _id } = req.user;
        const data = await this.service.getUserById(_id);
        httpResponse.Ok(res, data)
      } else httpResponse.notFound(res, data)
    } catch (error) {
      next(error);
    }
  };

}