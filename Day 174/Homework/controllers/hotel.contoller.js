const hotels = [
  {
    id: 1,
    name: "Crystal Bay Hotel",
    description: "Elegant 5-star stay with ocean views and a private spa.",
    price: 260
  },
  {
    id: 2,
    name: "Sunset Beach Resort",
    description: "Relaxing beachfront getaway with bars and surf rentals.",
    price: 185
  },
  {
    id: 3,
    name: "Highland Cabin Lodge",
    description: "Rustic mountain lodge with ski access and fireplace suites.",
    price: 150
  },
  {
    id: 4,
    name: "City Center Suites",
    description: "Contemporary hotel located in the heart of the shopping district.",
    price: 125
  },
  {
    id: 5,
    name: "Riverside Hideaway",
    description: "Peaceful cabins overlooking a serene river with kayaking options.",
    price: 165
  },
  {
    id: 6,
    name: "Executive Stay Hotel",
    description: "Ideal for business travelers, featuring workspaces and fast Wi-Fi.",
    price: 115
  },
  {
    id: 7, 
    name: "Imperial Crown Hotel",
    description: "Classic luxury hotel with grand decor and gourmet cuisine.",
    price: 230
  },
  {
    id: 8,
    name: "Canyon Sands Resort",
    description: "Desert retreat with camel tours and relaxing outdoor pools.",
    price: 170
  },
  {
    id: 9,
    name: "Earthstone Eco Lodge",
    description: "Sustainable hotel built with eco-friendly materials and solar power.",
    price: 135
  },
  {
    id: 10,
    name: "Transit Hub Hotel",
    description: "Comfortable airport hotel with 24/7 shuttle and breakfast service.",
    price: 95
  }
];


const getAll = (req, res) => {
    res.json(hotels);
};

const getHotelById = (req, res) => {
    const { id } = req.params;

    const hotel = hotels.find(hotel => hotel.id === id * 1);

    if(!hotel){
        return res.status(404).json({
            status: 'Fail',
            message: 'The hotel not found'
        })
    }

    res.status(200).json(hotel);
};

const createHotel = (req, res) => {
    const { name, description, price } = req.body;

    if(!name || !description || !price){
        return res.status(400).json({
            status: 'Fail',
            message: 'All fields are required name, description, price'
        })
    }

    const newHotel = {
        id: hotels[hotels.length - 1].id + 1,
        name,
        description,
        price
    }

    hotels.push(newHotel);

    res.status(201).json(newHotel);
};

const updateHotel = (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const hotel = hotels.find(hotel => hotel.id === id * 1);

    if(name !== undefined) hotel.name = name;
    if(description !== undefined) hotel.description = description;
    if(price !== undefined) hotel.price = price;

    res.status(200).json(hotel);
};

const deleteHotelById = (req, res) => {
    const { id } = req.params;

    const index = hotels.findIndex(hotel => hotel.id === id * 1);

    if(index === -1){
        return res.status(404).json({
            status: 'Fail',
            message: 'Hotel not found'
        })
    }

    hotels.splice(index, 1);

    res.status(204).send();
};

module.exports = { getAll, getHotelById, createHotel, updateHotel, deleteHotelById };