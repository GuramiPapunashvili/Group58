const express = require("express");
const app = express();


app.use(express.json());


let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
  { id: 4, name: "Monitor", price: 300 }
];

app.get("/products", (req, res) => {
  const { sort, limit } = req.query;
  let result = products.slice(); 


  if (sort === "price") {
    result.sort((a, b) => a.price - b.price); 
  } else if (sort === "-price") {
    result.sort((a, b) => b.price - a.price); 
  }


  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  res.status(200).json(result);
});


app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json({ message: "Product added successfully", product: newProduct });
});


app.patch("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const { name, price } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;

  res.status(200).json({ message: "Product updated successfully", product });
});


app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
});


app.listen(3000, () => {
  
});
