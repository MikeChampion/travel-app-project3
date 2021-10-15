import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $addEmail: String!
    $addPassword: String!
  ) {
    addUser(
      username: $username
      email: $addEmail
      password: $addPassword
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ACTIVITY = gql `
mutation addActivity (
  $where: String!
  $when: String!
  $description: String!
  $notes: String
){
  addActivity(
    where: $where
    when: $when
    description: $description
    notes: $notes
    

  ) {
    _id
    where 
    when
    description
    notes
    
  }
}
`

export const ADD_TRAVEL = gql `
mutation addActivity (
  $who: String!
  $how: String!
  $arrive: String!
  $depart: String!
  $notes: String
  
){
  addActivity(
    who: $who
    how: $how
    arrive: $arrive
    depart: $depart
    notes: $notes

  ) {
    _id
    who
    how
    arrive
    depart
    notes
    
  }
}
`
export const ADD_VOTE = gql`
  mutation addVote($activityId: ID!) {
    addVote(activityId: $activityId) {
      activityId
      votes {
        _id
        username
      }
      voteCount
    }
  }
`;

