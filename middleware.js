const express = require("express")
const productRoute = require("./routes/products")
const categoryRoute = require("./routes/categories")
const app = express()

const port = 4000

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`)
  next()
})

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.use("/products", productRoute)
app.use("/categories",categoryRoute)

app.listen(port, () => {
  console.log("Server is running on:", port)
})