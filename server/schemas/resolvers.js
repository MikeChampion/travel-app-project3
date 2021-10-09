const { AuthenticationError } = require('apollo-server-express');
const { User, Activity, Travel } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

  // ======== QUERIES ========
  Query:{
    activities: async () => {
      return  Activity.find()
      .populate("postedBy")

    },
    activity: async (_, args) => {
      return Activity.findOne( { _id: args._id})
      .populate("postedBy")

    },
    travels: async () => {
      return  Travel.find()
      .populate("postedBy")
    },
    travel: async (_, args) => {
      return Travel.findOne({_id: args._id})
      .populate("postedBy")
    }
    
   },

   // ========== MUTATIONS ==========
    Mutation: {

        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },

          addActivity: async (_, args) => {

            return  Activity.create(args)

            },
        removeActivity: async (_, { _id }) => {
          return Activity.findOneAndDelete({ _id });
        },

        addTravel: async (_, args) => {
          return Travel.create(args)
        },

        removeTravel: async (_, {_id}) => {
          return Travel.findOneAndDelete({_id});
        }

      }


}



module.exports = resolvers;