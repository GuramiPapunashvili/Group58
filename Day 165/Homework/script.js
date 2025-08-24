const http = require('http');
const fs = require('fs');
const url = require('url');

// Controller
const getCars = (req, res) => {
    return res.end(fs.readFileSync('cars.json', 'utf-8'));
}

const deleteCar = (req, res) => {
    const urlParts = url.parse(req.url, true);
    const carId = parseInt(urlParts.query.id);

    const cars = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));
    const updatedCars = cars.filter(car => car.id !== carId);

    fs.writeFileSync('cars.json', JSON.stringify(updatedCars));

    return res.end('<h1>Car deleted successfully</h1>');
}

const createCar = (req, res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const newCar = JSON.parse(body);
        const cars = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));
        newCar.id = cars.length ? cars[cars.length - 1].id + 1 : 1;
        cars.push(newCar);

        fs.writeFileSync('cars.json', JSON.stringify(cars));

        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newCar));
    })
}


const server = http.createServer((req, res) => {
    const { method, url } = req;

    switch (method) {
        case 'GET':
            return getCars(req, res);
        case 'DELETE':
            return deleteCar(req, res);
        case 'POST':
            return createCar(req, res);
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})