require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);


app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.put('/update', async (req, res) => {
    const newName = req.body.newName;
    const newAge = req.body.newAge;
    const newUsername = req.body.newUsername;
    const id = req.body.id;

    try {
        await UserModel.findById(id, (err, userToUpdate) => {
            userToUpdate.name = String(newName);
            userToUpdate.age = Number(newAge);
            userToUpdate.username = String(newUsername);
            userToUpdate.save();
        });
    } catch (error) {
        console.log(error);
    }

    res.send('updated');
});

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await UserModel.findByIdAndRemove(id).exec();
    res.send('Item Deleted');
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running`);
});