import { Router} from "express";
import { checkAuth} from "../middlewares/checkAuth.js";
import UserController from "../controllers/user.controller.js"
const controllers = new UserController();

const router = Router();

router.post("/register", controllers.register)

router.post("/login", controllers.login)

router.get("/profile", checkAuth, controllers.profile)

export default router;
