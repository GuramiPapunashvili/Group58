const express = require("express");
const app = express();

app.use(express.json());

let tours = [
  { id: 1, name: "Tbilisi City Tour", price: 50 },
  { id: 2, name: "Kazbegi Adventure", price: 120 },
  { id: 3, name: "Batumi Sea Tour", price: 80 }
];

app.get("/tours", (req, res) => {
  res.status(200).json(tours);
});

app.post("/tours", (req, res) => {
  const newTour = {
    id: tours.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  tours.push(newTour);
  res.status(201).json({ message: "Tour added successfully", tour: newTour });
});

app.put("/tours/:id", (req, res) => {
  const tourId = parseInt(req.params.id);
  const tour = tours.find(t => t.id === tourId);

  if (!tour) {
    return res.status(404).json({ error: "Tour not found" });
  }

  tour.name = req.body.name || tour.name;
  tour.price = req.body.price || tour.price;

  res.status(200).json({ message: "Tour updated successfully", tour });
});

app.delete("/tours/:id", (req, res) => {
  const tourId = parseInt(req.params.id);
  const index = tours.findIndex(t => t.id === tourId);

  if (index === -1) {
    return res.status(404).json({ error: "Tour not found" });
  }

  tours.splice(index, 1);
  res.status(200).json({ message: "Tour deleted successfully" });
});

app.listen(3000, () => {
  
});
