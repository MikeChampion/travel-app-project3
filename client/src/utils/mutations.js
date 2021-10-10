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
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
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
  
){
  addActivity(
    where: $where
    when: $when
    description: $description
    

  ) {
    _id
    where 
    when
    description
    
  }
}
`

export const ADD_TRAVEL = gql `
mutation addActivity (
  $who: String!
  $how: String!
  $arrive: String!
  $depart: String!
  
){
  addActivity(
    who: $who
    how: $how
    arrive: $arrive
    depart: $depart
    

  ) {
    _id
    who
    how
    arrive
    depart
    
  }
}
`

