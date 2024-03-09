import { Router } from "express";
import * as acc from "../controllers/AvailableCourses/AvailableCourses.js";
import { valid } from "../middleware/validation.js";
import * as vSchema from "../controllers/admin/admin.valid.js";
import { isAuth, roles } from "../middleware/auth.js";
const router = Router();

//login admin SuperAdmins
router.post(
  "/Availablecourses",
  isAuth([roles.admin, roles.stu]),
  acc.availableCourses
);
// router.get("/getinfo", isAuth([roles.admin, roles.super]), ac.Getuser);
// router.get("/info", isAuth([roles.admin]), ac.info);
// export default router;
export default router;
