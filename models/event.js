const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: {type: String, required: true},
    date: {type: Date, require: false},
    venue: {type: String, required: false},
    priceRange: {type: String, required: false}
}, {
    timestamps: true,
});

module.exports= mongoose.model('Events', eventsSchema);