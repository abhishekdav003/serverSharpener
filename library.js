const express = require("express")
const booksRouter = require("./routes/books")
const app = express()
const port = 4000

app.get("/", (req, res) => {
  res.send("library server is running")
})

app.use("/books",booksRouter)



app.listen(port, () => {
  console.log("Library server is running on port: ", port)
})