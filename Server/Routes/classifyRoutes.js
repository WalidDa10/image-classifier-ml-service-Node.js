import express from "express"
import { classifyCtrl } from "../controllers/classifyController.js";
import { upload } from "../config/configureMulter.js";
const router = express.Router()

//api/classify
router.post('/api/classify' , upload.single("image"), classifyCtrl)

export default router;