const express = require("express");
const router = express.Router();

// GET all items
router.get("/", (req, res) => {
  res.json({
    status: "success",
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
  });
});

// GET item by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    status: "success",
    data: { id, name: `Item ${id}` },
  });
});

// POST new item
router.post("/", (req, res) => {
  const { name } = req.body;
  res.status(201).json({
    status: "success",
    message: "Item created",
    data: { id: 3, name },
  });
});

// PUT update item
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({
    status: "success",
    message: "Item updated",
    data: { id, name },
  });
});

// DELETE item
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    status: "success",
    message: `Item ${id} deleted`,
  });
});

module.exports = router;
