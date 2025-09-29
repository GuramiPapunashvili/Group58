const express = require('express');

const userRouter = express.Router();

const users = [];

userRouter.post('/register', (req, res) => {
    const { email, password, username } = req.body;

    const findUser = users.find((user) => user.email === email);

    if(findUser){
        return res.status(400).json({
            status: "Fail",
            message: "user with the email already exists"
        })
    }

    const newUser = {
        email,
        password,
        username,
        id: Date.now()
    }

    users.push(newUser);

    res.status(201).json(newUser);
});

userRouter.post('/login', (req, res) => {
    const { email, password } = req.body;

    const findUser = users.find((user) => user.email === email && user.password === password);

    if(!findUser){
        return res.status(404).json({
            status: "Fail",
            message: "User not found or the password is incorrect"
        })
    }

    res.json({
        email: findUser.email,
        password: findUser.password,
        id: findUser.id
    });
});

userRouter.get('/', (req, res) => {
    res.json(users.map(obj => [{...obj, password: null}]));
});

userRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    const user = user.find(user => user.id === id * 1);

    if(!user){
        return res.status(404).json({
            status: "Fail",
            message: "User not found"
        })
    }

    res.json({
        email: user.email,
        surname: user.surname,
        id: user.id
    })
});

module.exports = userRouter;