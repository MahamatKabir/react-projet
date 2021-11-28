const express = require('express');//import express server
const app = express(); //use it in our application
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const cors = require('cors')

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connection Successfull!"))
.catch((err) =>{
    console.log(err);
});
app.use(cors());
app.use(express.json()); //rest api çalıştırması sağlıyor
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000 , () => {
    console.log("our backend server is working ");
});

