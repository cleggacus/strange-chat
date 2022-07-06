import express from "express";
const router = express.Router();

router.get("/cock", (_req, res, _next) => {
  res.status(200).json({
    mes: "cum"
  });
})

export default router;