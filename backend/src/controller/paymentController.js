const Data = require("../models/data");

const getproblem = async (req, res) => {
  const {
    cardNumber,
    nameOnCard,
    securityCode,
    expirationDate,
    amountOfDonation,
    user_id,
  } = req.body;
  console.log(req.body);

  // Create a new instance of the Data model with the submitted data
  const newData = new Data({
    cardNumber,
    nameOnCard,
    securityCode,
    expirationDate,
    amountOfDonation,
    user_id,
  });

  try {
    // Save the new data to the database
    const user = await newData.save();
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while saving the payment data" });
  }
};

module.exports = { getproblem };
