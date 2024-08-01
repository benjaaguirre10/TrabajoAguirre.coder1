import UserDaoMongo from "../persistence/dao/mongodb/user.dao.js"
import jwt from "jsonwebtoken";
import "dotenv/config";
import config from "../config.js";
import { createHash, isValidPassword} from "../utils.js";
import Services from "./class.service.js";

const userDao = new UserDaoMongo()

export default class UserService extends Services{
    constructor(){
        super(userDao);
    }
    generateToken(user, time = '5m') {
        const payload = {
          userId: user._id
        };
        return jwt.sign(payload, config.SECRET_KEY_JWT, { expiresIn: time });
      }
    
      async register(user) {
        try {
          const { email, password } = user;
          console.log(user);
          const existUser = await this.dao.getByEmail(email);
          if (!existUser) {
            if (email === config.EMAIL_ADMIN && password === config.PASS_ADMIN) {
              const newUser = await this.dao.create({
                ...user,
                password: createHash(password),
                role: "admin",
              });
              return newUser;
            } else {
              const newUser = await this.dao.create({
                ...user,
                password: createHash(password),
              });
              return newUser;
            }
          }
          return null;
        } catch (error) {
          throw new Error(error);
        }
      };
    
      async login(user) {
        try {
          const { email, password } = user;
          const userExist = await this.dao.getByEmail(email);
          if (!userExist) return null;
          const passValid = isValidPassword(password, userExist);
          if (!passValid) return null;
          if(userExist && passValid) return this.generateToken(userExist);
        } catch (error) {
          throw new Error(error);
        }
      };

      getUserById = async (id) => {
        try {
          return await this.dao.getUserById(id);
        } catch (error) {
          throw new Error(error);
        }
      };
}