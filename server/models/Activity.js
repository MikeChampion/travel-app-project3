const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema  ({
    where: {
        type: String,
        required: true,
        trim: true,
    },
    when: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    //   }
});


const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;