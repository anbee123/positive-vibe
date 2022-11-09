const express= require('express')
const app = express()
const mongoose = require('mongoose')
const Quote = require('./models/quote.js')
const seedData = require('./models/seed.js')
const quotesController = require ("./controllers/quotes")
const methodOverride = require("method-override")



require('dotenv').config()

const PORT = process.env.PORT || 3022;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

   // Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

  //middleware
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false }));
app.use(methodOverride("_method"));
app.use("/quotes", quotesController)


//
app.get("/quotes", (req,res)=> {
  res.send("hello")
})












//listener
app.listen(PORT, () => {
    console.log(`living ${PORT}`)
  });