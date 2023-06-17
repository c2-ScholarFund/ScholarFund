const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  cardNumber: Number,
  nameOnCard: String,
  securityCode: Number,
  expirationDate: Number,
  amountOfDonation: Number,
});

const Data = mongoose.model("Data", dataSchema); // Create the Data model

module.exports = Data; // Export the Data model
