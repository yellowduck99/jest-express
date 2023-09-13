import express from "express";

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
} from "../controllers/product.controller.js";
const app = express();
const router = express.Router();
app.use(express.json());
app.use('/products', router)

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);

export default router;
