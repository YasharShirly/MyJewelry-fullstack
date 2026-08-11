import { Router } from "express";
import { getAllcategorys } from "../controller/category.js";

const router=Router();
router.get("/",getAllcategorys)


export default router;