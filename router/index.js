// User Signin And Login router file .//

import express from "express";
import auth from "../middleware/auth.js";

import {
  indexPage,
  exchangeController,
  getVechical,
  userData,
  getTireInfo,
  getpermission,
  getCarInformation,
  getCarOil,
} from "../controller/indexController.js";

const router = express.Router();

router.get("/login", indexPage);
router.get("/callback", exchangeController);
router.get("/getCar", auth, getVechical);
router.get("/getUserData", auth, userData);
router.get("/getTire/:id", auth, getTireInfo);
router.get("/getPermission/:id", auth, getpermission);
router.get("/getCarInfo/:id", auth, getCarInformation);
router.get("/getCaroil/:id", auth, getCarOil);

export default router;
