const movies = [
    {
        id: 1,
        name: "Prisoners",
        director: "Denis Villeneuve",
        rating: 8.1,
        year: 2013
    },
    {
        id: 2,
        name: "Moonlight",
        director: "Barry Jenkins",
        rating: 7.4,
        year: 2016
    },
    {
        id: 3,
        name: "Her",
        director: "Spike Jonze",
        rating: 8.0,
        year: 2013
    },
    {
        id: 4,
        name: "The Handmaiden",
        director: "Park Chan-wook",
        rating: 8.1,
        year: 2016
    },
    {
        id: 5,
        name: "Whiplash",
        director: "Damien Chazelle",
        rating: 8.5,
        year: 2014
    }
];


const getMovies = (req, res) => {
    res.json(movies);
};

const getMovieById = (req, res) => {
    const { id } = req.params;

    const movie = movies.find(movie => movie.id === id * 1);

    if(!movie){
        return res.status(404).json({
            status: "Fail",
            message: "Movie not found"
        })
    }

    res.json(movie);
};

const createMovie = (req, res) => {
    const { director, rating, name, year } = req.body;

    if(!director || !rating || !name || !year){
        return res.status(400).json({
            status: "Fail",
            message: 'All fields are required director, rating, name, year'
        })
    }

    const newMovie = {
        id: movies[movies.length - 1].id + 1 || 1,
        director,
        rating,
        name,
        year
    }

    movies.push(newMovie);

    res.status(201).json(newMovie);
};

const updateMovie = (req, res) => {
    const { id } = req.params;
    const { director, rating, name, year } = req.body;

    const movie = movies.find(movie => movie.id === id * 1);

    if(!movie){
        return res.status(404).json({
            status: 'Fail',
            message: 'Movie not found'
        })
    }

    if(director !== undefined) movie.director = director;
    if(rating !== undefined) movie.rating = rating;
    if(name !== undefined) movie.name = name;
    if(year !== undefined) movie.year = year;

    res.status(200).json(movie);
};

const deleteMovie = (req, res) => {
    const { id } = req.params;

    const movieIndex = movies.findIndex(movie => movie.id === id * 1);

    if(movieIndex === -1){
        return res.json(404).json({
            status: "Fail",
            message: "Movie not found"
        })
    }

    movies.splice(movieIndex, 1);

    res.status(204).send();
};

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};