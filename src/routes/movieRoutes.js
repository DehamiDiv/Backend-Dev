import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello from movies");
});
router.post("/", (req, res) => {
  res.json("Movie Added");
});
router.put("/", (req, res) => {
  res.json("Movie Updated");
});
router.delete("/", (req, res) => {
  res.json("Movie Deleted");
});

export default router;
