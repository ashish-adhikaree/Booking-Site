import { Router } from "express";
import {
  createShop,
  deleteShop,
  getAllShops,
  updateShop,
  getShop,
} from "../controllers/shops.js";

const router = Router();

//CREATE
router.post("/", createShop);

//UPDATE
router.put("/update/:id", updateShop);

//GETONE
router.get("/findOne/:id", getShop);

//GETALL
router.get("/", getAllShops);

//DELETE
router.delete("/delete/:id", deleteShop);

export default router;
