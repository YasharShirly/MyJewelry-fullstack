import { Router } from "express";
import { getAllProducts,getProdById,getProdByIdCategory,addProd,deleteById,updateProd, totalPages } from "../controller/product.js";
import { checkAdmin,checkToken } from "../utils/help.js";

const router=Router();
router.get("/",getAllProducts)
router.get("/numpages",totalPages)
router.get("/:id",getProdById)
router.get("/byIdCategory/:id",getProdByIdCategory)
router.delete("/:id",checkAdmin,deleteById)
router.put("/:id",checkAdmin,updateProd)
router.post("/",checkAdmin,addProd)

export default router;