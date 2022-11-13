import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clothsPostSchema = new Schema({
    name: {
        type: String,
        required: [true, "Required⚠️"]
    },
    description: {
        type: String,
        required: [true, "Required⚠️"]
    }
});

module.exports = mongoose.model("clothsPost", clothsPostSchema);