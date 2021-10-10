const { AuthenticationError } = require('apollo-server-express');
const { User, Activity, Travel } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

  // ======== QUERIES ========
  Query:{

    user: async (_, { _id }) => {
      return User.findOne({ _id });
    },

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

          addActivity: async (_, args, context) => {
            
            if (context.user) {
              const activity = await Activity.create({ ...args, postedBy: context.user._id });
              
                await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { activities: activity._id } },
                { new: true }
              );

              return await activity.populate('postedBy').execPopulate();
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },
       
        removeActivity: async (_, { _id }) => {
          return Activity.findOneAndDelete({ _id });
        },

        addTravel: async (_, args, context) => {
         
          if (context.user) {
            const travel = await Travel.create({ ...args, postedBy: context.user._id });
            
              await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { travels: travel._id } },
              { new: true }
            );

            return await travel.populate('postedBy').execPopulate();
          }
        
          throw new AuthenticationError('You need to be logged in!');
          },

        removeTravel: async (_, {_id}) => {
          return Travel.findOneAndDelete({_id});
        }

      }


}



module.exports = resolvers;