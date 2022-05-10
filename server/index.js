require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.API_KEY);

app.listen(PORT, () => {
    console.log(`Server running on : ${PORT}`);
});