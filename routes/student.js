const express = require("express")
const router = express.Router()

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  const names = students.map((student) => student.name).join(", ");
  res.send(`Students: ${names}`);
});

router.get("/:id", (req, res) => {
  const studentId = parseInt(req.params.id);

  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  res.send(`Student: ${student.name}`);
});

module.exports = router