const express = require("express")
const studentsRoute = require("./routes/student")
const coursesRoute = require("./routes/course")
const app = express()
const port = 4000




app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
})
app.use("/students", studentsRoute)
app.use("/courses",coursesRoute)

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});


app.listen(port, () => {
  console.log("Learning Server is running on port:",port)
})