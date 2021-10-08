const { gql } = require('apollo-server-express');

const typeDefs = gql`
input UserInput {
  _id: ID
  firstName: String
  lastName: String
  email: String
}

type User {
    _id: ID
    firstName: String
    lastName: String
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
    postedBy: User!
     
}

type Travel {
  _id: ID
  who: String
  how: String
  arrive: String
  depart: String
  postedBy: User!

}



  type Query {
   user: User
   activities: [Activity]
   activity(_id: ID!) : Activity
   travels: [Travel]
   travel(_id: ID!): Travel
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addActivity(when: String!, where: String!, description: String!, postedBy: ID!): Activity
    removeActivity(_id: String!): Activity
    addTravel(who: String, how: String, arrive: String, depart: String, postedBy: ID! ): Travel
    removeTravel(_id: String!): Travel
  }`;

  module.exports = typeDefs;