const { AuthenticationError } = require('apollo-server-express');
const { User, Activity } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query:{
    activities: async () => {
      return await Activity.find();
    },
    activity: async (parent, { activityId }) => {
      return Activity.findOne({ _id: activityId });
    },
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

            return Activity.create(args)
            // .populate(args.postedBy);

            // if(!signToken)
            // throw new AuthenticationError('Not logged in');

        },


        removeActivity: async (parent, { _id }) => {
          return Activity.findOneAndDelete({ _id });
        }

      }


}



module.exports = resolvers;