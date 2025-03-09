import { Router } from "express";
import { getAllObjects, getObjectsById, addObject, updateObject, deleteObject, getObjectsByTitle } from './../controllers/exampleController.js';

const router = Router();

//define routes here...
router.get("/", getAllObjects);
router.get("/id/:id", getObjectsById);
router.get("/title/:title", getObjectsByTitle)
router.post("/", addObject);
router.put("/", updateObject);
router.delete("/title/:title", deleteObject);

export default router;