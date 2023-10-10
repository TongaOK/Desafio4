import express from "express";

import productsRouter from "../routers/products.router.js";
import cartsRouter from "../routers/carts.router.js";

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running on port 8080");
});
