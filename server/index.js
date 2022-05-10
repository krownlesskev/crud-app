require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.API_KEY);

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
    const newAge = req.body.newAge;
    const id = req.body.id;

    try {
        await UserModel.findById(id, (err, userToUpdate) => {
            userToUpdate.age = Number(newAge);
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

app.listen(PORT, () => {
    console.log(`Server running on : ${PORT}`);
});