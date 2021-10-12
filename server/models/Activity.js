const mongoose = require('mongoose');
const voteschema = require('./Vote')



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
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },
      votes: [voteschema]
    
      
    })
    



const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;