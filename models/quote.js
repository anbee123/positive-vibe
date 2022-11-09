const mongoose = require('mongoose')
const quotesSchema = new mongoose.Schema({

    quote:{
        type: String
    },
    name: {
        type: String
    },
    img: {
        type: String
    }
});
//this is where we define our model using the schema we created
const Quote = mongoose.model("Quotes", quotesSchema);

//this is how we send vars to other files
module.exports = Quote