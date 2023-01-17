import { Router } from "express";
import {
  createPackage,
  updatePackage,
  deletePackage,
  getPackage,
  getAllPackages,
} from "../controllers/packages.js";

const router = Router();

//CREATE
router.post("/", createPackage);
//UPDATE
router.put("/update/:id", updatePackage);
//DELETE
router.delete("/delete/:id", deletePackage);
//GET ONE
router.get("/findOne/:id", getPackage);
//GETALL
router.get("/", getAllPackages);

export default router;
