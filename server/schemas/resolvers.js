const { AuthenticationError } = require('apollo-server-express');
const { User, Activity, Travel } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Activity: {
    voteCount: (parent) => parent.votes.length
},

  // ======== QUERIES ========
  Query:{

    user: async (_, { username }) => {
      return User.findOne({ username }).populate("activities");
    },
    users: async () => {
      return User.find().populate("activities")
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

        login: async (_, { email, password }) => {
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
                { $addToSet: { activities: activity._id } },
                { new: true }
              );

              return activity
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
        },

      addVote: async (_, { activityId }, context) => {
        if (context.user) {
          const likedActivity = await Activity.findOne({_id: activityId});
          if (likedActivity) {
            if(likedActivity.votes.find((vote) => vote.username === context.user.username)){
              const unlikedActivity = likedActivity.votes = likedActivity.votes.find((vote) => vote.username === context.user.username);
              return Activity.findOneAndUpdate(
                {_id: activityId},
                { 
                  $pull: {
                    votes: {
                      _id: unlikedActivity._id

                    },
                  },
                },
                {new: true}
              )
            } else {
              return Activity.findOneAndUpdate (
                {_id: activityId},
                {
                  $addToSet: {
                    votes: {username: context.user.username},
                  },
                 
                },
                {
                  new: true,
                  runValidators: true,
                }
              )

          } 
        }
      
       }  throw new AuthenticationError('You need to be logged in!');
      }
    }


}



module.exports = resolvers;