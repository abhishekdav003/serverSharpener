const express = require("express")

const app = express()
app.use(express.json())
const port = 3000

const users = [
  {
    "id": 1,
    "name":"abhishek"
  },
  {
    "id": 2,
    "name":"aman"
  }
]

app.get("/", (req,res) => {
  res.send("server is running")
})

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id)
  const user = users.find(u => u.id === userId)
  if (!user) {
    res.status(404).json({message:"user not found"})
  }

  res.json(user)

})

app.post("/users", (req, res) => {
  const {name} = req.body
  const newUser = { id: users.length + 1, name }
  users.push(newUser)
  res.status(201).json(newUser)

})

app.get("/users", (req, res) => {
  res.json(users)
})

app.listen(port, () => {
  console.log("Server is running on port:" ,  port)
})
