const mongoose = require('mongoose');

// mongoose.Schema defines the structure of the data going into the collection.
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
});

// First parameter in mongoose.model(1,2) is the collection in mongoDB.
// Second parameter is the UserSchema we defined above.
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;