const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema  ({

     votedBy: {
        type: String,
        required: true
      },

});

    const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;