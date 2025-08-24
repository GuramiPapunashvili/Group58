const express = require("express");
const app = express();
const PORT = 3000;

let tours = [
  { id: 1, name: "Tbilisi City Tour", price: 50 },
  { id: 2, name: "Kazbegi Adventure", price: 120 },
  { id: 3, name: "Batumi Sea Tour", price: 80 }
];

app.get("/tours", (req, res) => {
  const { sort } = req.query;
  let result = tours.slice();

  if (sort === "price") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "-price") {
    result.sort((a, b) => b.price - a.price);
  }

  res.status(200).json(result);
});

app.listen(3000, () => {
  
});
