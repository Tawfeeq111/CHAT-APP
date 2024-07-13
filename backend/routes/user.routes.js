import express from "express";
import {getuserForSlideBar} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoutes.js";

const router = express.Router();

router.get("/", protectRoute, getuserForSlideBar);

export default router;