const express = require('express')
const quoteRouter = express.Router();
const quoteData = require("../models/seed")
const Quote = require('../models/quote.js')


// Seed
quoteRouter.get("/seed", (req, res) => {
    Quote.deleteMany({}, (error, allQuotes) => { })
    Quote.create(quoteData, (error, data) => {
      res.redirect("/quotes");
    });
  })

  //INDEX 
quoteRouter.get("/", (req, res) => {
    Quote.find({}, (error, allQuotes) => {
      res.render("index.ejs", { quotes: allQuotes })
    })
  })
//   // NEW
quoteRouter.get("/new", (req, res) => {
    res.render("new.ejs")
  })
  
  // DELETE
  quoteRouter.delete("/:id", (req, res) => {
    Quote.findByIdAndRemove(req.params.id, (err, deletedQuote) => {
      res.redirect("/quotes")
    })
  })
  
//CREATE//
quoteRouter.post("/", (req, res) => {

    Quote.create(req.body, (err, createdQuote) => {
      console.log(err, createdQuote)
      res.redirect("/quotes")
    })
  })
  //EDIT//
quoteRouter.get("/:id/edit", (req, res) => {
    Quote.findById(req.params.id, (err, foundQuote) => {
      res.render("edit.ejs", {
        foundQuote: foundQuote,
        index: req.params.id,
        tabTitle: "Edit",
      })
    })
  })

//SHOW//
quoteRouter.get("/:id", (req, res) => {
    Quote.findById(req.params.id, (err, foundQuote) => {
      res.render("show.ejs", {
        quote: foundQuote,
        tabTitle: foundQuote.name,
      })
    })
  })







module.exports = quoteRouter