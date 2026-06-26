const express = require("express")
const app = express()
const port = 4000

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.get("/welcome/:username", (req, res) => {
  const username = req.params.username
  const role = req.query.role
  res.send(`Hello!, ${username}, rour role is ${role}`)
});

app.listen(port, () => {
  console.log("server is running on port:", port )
})