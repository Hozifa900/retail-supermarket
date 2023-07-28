const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const port = 8080;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// API endpoint to get all Products in ascending order of the Product Names
app.get("/api/products", async (req, res) => {
  try {
    const results = await db
      .promise()
      .query(
        "SELECT Product.name, Supplier.name as supplerName, Product.unitPrice, Product.quantityInStock, Product.dateSupplied, Supplier.contactPhone  FROM Product, Supplier WHERE Product.SupplierId = Supplier.SupplierId ORDER BY Product.name ASC"
      );
    res.json(results[0]);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: err });
  }
});

// API endpoint to get all Products in ascending order of the Product Names for the given Supplier
app.get("/api/products/:supplierId", async (req, res) => {
  try {
    const results = await db
      .promise()
      .query(
        "SELECT Product.name, Supplier.name as supplerName, Product.unitPrice, Product.quantityInStock, Product.dateSupplied, Supplier.contactPhone  FROM Product, Supplier WHERE Product.SupplierId = Supplier.SupplierId AND Product.SupplierId = ? ORDER BY Product.name ASC",
        [req.params.supplierId]
      );
    res.json(results[0]);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: err });
  }
});

// API endpoint to get all Suppliers
app.get("/api/suppliers", async (req, res) => {
  try {
    const results = await db.promise().query("SELECT * FROM Supplier");
    res.json(results[0]);
  } catch (err) {
    console.error("Error fetching suppliers:", err);
    res.status(500).json({ error: err });
  }
});

// API endpoint to add new products to the database
app.post("/api/add-product", async (req, res) => {
  const newProduct = req.body;
  try {
    const results = await db
      .promise()
      .query(
        "INSERT INTO Product (name, unitPrice, quantityInStock, dateSupplied, SupplierId) VALUES (?, ?, ?, ?, ?)",
        [
          newProduct.name,
          newProduct.unitPrice,
          newProduct.quantityInStock,
          newProduct.dateSupplied,
          newProduct.SupplierId,
        ]
      );
    newProduct.id = results[0].insertId;
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error inserting product: ", err);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
