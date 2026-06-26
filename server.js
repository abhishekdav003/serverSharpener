const express = require("express")

const app = express()

app.use((req, res, next) => {
  console.log("Hello middleware")
  res.send("<h1>Hello Screen</h1>")
})
console.log("Hello")
app.listen(3000, () => {
  console.log(
    "Server is up and running on port 3000! Ready to handle requests.",
  );
})