import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foodType: {
    type: String,
    required: [true, "Food Type required⚠️"],
  },
  foodCount: {
    type: String,
    required: [true, "Count required⚠️"],
  },
  donationWay: {
    type: String,
    required: [true, "Donationway required⚠️"],
  },
  availability: {
    type: String,
    required: [true, "Availability required⚠️"],
  },
  status: {
    type: String,
    default: "Pending"
    //Approved || Pending || Declined
  }
});


module.exports = mongoose.model("FoodSchema", foodSchema);