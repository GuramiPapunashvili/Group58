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


//not finished