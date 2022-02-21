import express from "express";
import userController from "../controllers/userController.js";
import userValidate from "../middleware/userValidate.js";
import roleValidate from "../middleware/roleValidate.js";
import user from "../models/user.js";

const router = express.Router();

//http:localhost:3001/api/role/registerRole

router.post(
  "/registerUser",
  userValidate.existingUser,
  roleValidate.existingRole,
  userController.registerUser
);

router.get("/listUser/:name?", userController.listUser);
router.get("/listUserAdmin/:name?", userController.listUserAdmin);
router.post("/login", userController.login);
router.put("/delete/:_id", userController.deleteUser);
router.put("/updateUserAdmin", userController.updateUserAdmin);



export default router;
