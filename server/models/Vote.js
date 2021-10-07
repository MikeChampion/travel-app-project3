const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema  ({

     votedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity',
        required: true
      }

});

    const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;