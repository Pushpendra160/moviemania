const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');
const path = require('path');
const app = express();


//database call
connectDb();


//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// config dot env file
dotenv.config();

//routes
// user routes
app.use('/api/v1/users', require('./routes/userRoute'));


//transection routes





const PORT = 8080  || process.env.PORT

//listerning

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname, "client", "dist")));
    res.sendFile(path.resolve(__dirname,"client", "dist", "index.html"));
});
app.listen(PORT, (req, res)=>{
    console.log(`Server is listening on ${PORT}`)
});