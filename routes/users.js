const express = require("express");
const Person = require("../models/person.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const person = await Person.find();
  res.status(200).json({ person: person });
});

router.post("/", async (req, res) => {
  const data = req.body;
  const person = new Person(data);
  await person.save();
  res.status(201).json({ person: person });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const person = await Person.findById(id);
  res.status(200).json({ person: person });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await Person.findByIdAndUpdate(id, data);
  res.status(200).json({ msg: "updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Person.findByIdAndDelete(id);
  res.status(200).json({ msg: "deleted successfully" });
});
module.exports = router;
