import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookType: {
    type: String,
    required: [true, "Food Type required⚠️"],
  },
  bookCount: {
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


module.exports = mongoose.model("BookSchema", bookSchema);