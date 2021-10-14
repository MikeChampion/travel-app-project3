const { gql } = require('apollo-server-express');

const typeDefs = gql`


type User {
    _id: ID
    username: String
    email: String
}

type Auth {
    token: ID
    user: User
  } 

  type Activity{
    _id: ID
    where: String!
    when: String!
    description: String!
    postedBy: User
    votes: [Vote]
    voteCount: Int
     
}

type Travel {
  _id: ID
  who: String
  how: String
  arrive: String
  depart: String
  notes: String
  postedBy: User

}

type Vote {
  _id: ID
  username: String
}



  type Query {
   user(_id: ID!): User
   users: [User]
   activities(postedBy: ID):[Activity]
   activity(_id: ID!) : Activity
   travels(postedBy: ID) :[Travel]
   travel(_id: ID!): Travel
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addActivity(when: String!, where: String!, description: String!): Activity
    removeActivity(_id: String!): Activity
    addTravel(who: String, how: String, arrive: String, depart: String, notes: String ): Travel
    removeTravel(_id: String!): Travel
    addVote(activityId: ID!): Activity
  }`;

  module.exports = typeDefs;