import express, { Request, Response, NextFunction } from "express"
import login from "../controllers/user/login";
import logout from "../controllers/user/logout";
import register from "../controllers/user/register";
import userAuth from "../controllers/user/auth";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.all("/logout", logout);
router.all("/auth", auth, userAuth)

export default router;
