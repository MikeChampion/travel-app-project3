const { Schema } = require('mongoose');

;

const voteSchema = new Schema  ({

     username: {
     type: String,
     required: true
      },

});

   

module.exports = voteSchema;