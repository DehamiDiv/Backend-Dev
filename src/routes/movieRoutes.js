import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Hello from movies");
});

export default router;
