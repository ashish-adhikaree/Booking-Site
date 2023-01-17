import { Router } from "express";
import {
  createPromoCode,
  updatePromoCode,
  deletePromoCode,
  getPromoCode,
  getAllPromoCodes,
} from "../controllers/promoCodes.js";

const router = Router();

//CREATE
router.post("/", createPromoCode);
//UPDATE
router.put("/update/:id", updatePromoCode);
//DELETE
router.delete("/delete/:id", deletePromoCode);
//GET ONE
router.get("/findOne/:id", getPromoCode);
//GETALL
router.get("/", getAllPromoCodes);

export default router;
