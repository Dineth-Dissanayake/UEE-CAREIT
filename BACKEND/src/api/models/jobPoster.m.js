import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const jobPosterSchema = new Schema({
  jobpostername: {
    type: String,
    required: [true, "required⚠️"],
  },
  jobcategory: {
    type: String,
    required: [true, "required⚠️"],
  },
  jobtype: {
    type: String,
    required: [true, "required⚠️"],
  },
  email: {
    type: String,
    required: [true, "required⚠️"],
  },
  mobilenumber: {
    type: String,
    required: [true, "required⚠️"],
  },
  location: {
    type: String,
    required: [true, "required⚠️"],
  },
  salary: {
    type: String,
    required: [true, "required⚠️"],
  },
  description: {
    type: String,
    required: [true, "required⚠️"],
  }
});


module.exports = mongoose.model("JobPosterSchema", jobPosterSchema);