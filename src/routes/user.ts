import express from "express"
import login from "../controllers/user/login";
import register from "../controllers/user/register";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;
