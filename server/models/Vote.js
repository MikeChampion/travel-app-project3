const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema  ({

     votedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
        required: true
      }

});

    const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;