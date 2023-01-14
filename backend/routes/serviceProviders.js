import { Router } from "express";
import {
  createServiceProvider,
  deleteServiceProviders,
  getAllServiceProviders,
  updateServiceProvider,
  getServiceProvider,
} from "../controllers/serviceProviders.js";

const router = Router();

//CREATE
router.post("/", (req, res, next) => {
  createServiceProvider(req, res, next);
});

//UPDATE
router.put("/update/:id", (req, res, next) => {
  updateServiceProvider(req, res, next);
});

//GETONE
router.get("/findOne/:id", (req, res, next) => {
  getServiceProvider(req, res, next);
});

//GETALL
router.get("/", (req, res, next) => {
  getAllServiceProviders(req, res, next);
});

//DELETE
router.delete("/delete/:id", (req, res, next) => {
  deleteServiceProviders(req, res, next);
});

export default router;
