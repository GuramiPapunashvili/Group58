const express = require("express");
const app = express();

const cars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2020, color: "White", price: 18000 },
  { id: 2, brand: "Honda", model: "Civic", year: 2019, color: "Black", price: 17500 },
  { id: 3, brand: "Ford", model: "Mustang", year: 2021, color: "Red", price: 28000 },
  { id: 4, brand: "Chevrolet", model: "Camaro", year: 2018, color: "Yellow", price: 25000 },
  { id: 5, brand: "BMW", model: "3 Series", year: 2022, color: "Blue", price: 42000 },
  { id: 6, brand: "Mercedes-Benz", model: "C-Class", year: 2020, color: "Silver", price: 39000 },
  { id: 7, brand: "Audi", model: "A4", year: 2021, color: "Gray", price: 37000 },
  { id: 8, brand: "Tesla", model: "Model 3", year: 2022, color: "White", price: 45000 },
  { id: 9, brand: "Nissan", model: "Altima", year: 2019, color: "Blue", price: 16000 },
  { id: 10, brand: "Hyundai", model: "Elantra", year: 2020, color: "Black", price: 15000 }
];

app.get("/cars", (req, res) => {
  res.status(200).json(cars);
});

app.listen(3000, () => {

});
