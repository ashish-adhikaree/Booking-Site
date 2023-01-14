import { Router } from "express";
import { createActivity, updateActivity, deleteActivity, getActivity, getAllActivities } from "../controllers/activities.js";

const router = Router()

//CREATE
router.post("/", createActivity)
//UPDATE
router.put("/update/:id", updateActivity)
//DELETE
router.delete("/delete/:id", deleteActivity)
//GET ONE
router.get("/findOne/:id", getActivity)
//GETALL
router.get("/", getAllActivities)

export default router