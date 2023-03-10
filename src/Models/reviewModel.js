const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const reviewSchema = new mongoose.Schema({
    bookId: {
        type: ObjectId,
        required: true,
        ref: "Book"

    },
    reviewedBy: {
        type: String,
        default: "Guest"

    },
    reviewedAt: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        minlength: 1,
        maxlength: 5,
        required: true
    },
    review: String,
    isDeleted: {
        type: Boolean,
        default: false

    }

});

module.exports = mongoose.model("review", reviewSchema);