import { Router } from "express";
import { getAllOrders,getAllOrdersIsNotOut,getOrderById,addOrder,updateOrder } from "../controller/order.js";

const router=Router();
router.get("/",getAllOrders)
router.get("/isNotOut/",getAllOrdersIsNotOut)
router.get("/:id",getOrderById)
router.put("/:id",updateOrder)
router.post("/",addOrder)

export default router;