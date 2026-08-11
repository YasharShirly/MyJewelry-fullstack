import { Router } from "express";
import { getAllUsers,getUserById,loginUser,updateUser,addUser } from "../controller/user.js";
import { checkAdmin,checkToken } from "../utils/help.js";

const router=Router();
router.get("/",checkAdmin,getAllUsers)
router.get("/:id",getUserById)
router.put("/:id",checkToken,updateUser)
router.post("/",addUser)
router.post("/login",loginUser)

export default router;