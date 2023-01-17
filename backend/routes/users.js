import { Router } from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/users.js";
const router = Router();

//UPDATE
router.put("/update/:id", updateUser);

//DELETE
router.delete("/delete/:id", deleteUser);

//GET ONE
router.get("/findOne/:id", getUser);

//GET ALL
router.get("/", getAllUsers);

export default router;
