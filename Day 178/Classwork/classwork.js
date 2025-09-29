const mangoose = require('mangoose')

const user = (
    {
        fullname: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        }
    }
)


const User = mongoose.model('Users', user)

module.exports = User;

const createUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    const newUser = await User.create({
        fullname,
        email,
        password
    })

    res.status(201).json(newUser)
}