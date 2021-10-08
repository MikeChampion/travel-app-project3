const mongoose = require('mongoose');

const { Schema } = mongoose;

const travelSchema = new Schema  ({
    who: {
        type: String,
        required: true,
        trim: true,
    },
    how: {
        type: String,
        required: true,
        trim: true
    },
    arrive: {
        type: String,
        required: true,
        trim: true
    },
    depart: {
        type: String,
        required: true,
        trim: true
    },
    
     postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
});

    const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;