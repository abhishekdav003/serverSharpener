const express = require("express");
const app = express();
const port = 4000;

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to ecommerce platform");
});

app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
