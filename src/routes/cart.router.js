import { Router } from "express";
import CartController from "../controllers/cart.controller.js";
const controllers = new CartController()
const router = Router()

router.get("/", controllers.getAll);
router.get("/:id", controllers.getById);
router.post("/", controllers.create);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.delete);
router.post("/:cid/product/:pid", controllers.addProductToCart)
router.put("/:cid/product/:pid", controllers.updateQuantity);
router.delete("/:cid/all", controllers.deleteCarts)
router.delete("/:cid/product/:pid", controllers.deleteProductFromCart);
router.delete("/:cid", controllers.deleteAllProducts);

export default router;