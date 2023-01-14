import { Router } from "express";
import {
  createServiceProvider,
  deleteServiceProvider,
  getAllServiceProviders,
  updateServiceProvider,
  getServiceProvider,
} from "../controllers/serviceProviders.js";

const router = Router();

//CREATE
router.post("/", createServiceProvider);

//UPDATE
router.put("/update/:id", updateServiceProvider);

//GETONE
router.get("/findOne/:id", getServiceProvider);

//GETALL
router.get("/", getAllServiceProviders);

//DELETE
router.delete("/delete/:id", deleteServiceProvider);

export default router;
