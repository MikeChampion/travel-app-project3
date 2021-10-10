import { gql } from 'graphql-tag';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
        }
      }
    `;

    export const QUERY_ACTIVITIES = gql`
  query activities($postedBy: ID) {
      activities(postedBy: $postedBy) {
      _id
      when
      where
      description
      postedBy {
        _id
        firstName
        lastName
      }
      
    }
  }
`;

export const QUERY_ACTIVITY = gql`
  query activity($id: ID!) {
    activity(_id: $id) {
      _id
      when
      where
      description
      postedBy {
        _id
        firstName
        lastName
      }

    }
  }
`;

export const QUERY_TRAVELS = gql`
query travels($postedBy: ID) {
    travels(postedBy: $postedBy) {
      _id
      who
      how
      arrive
      depart
      postedBy {
        _id
        firstName
        lastName
    }
    
  }
}
`;

export const QUERY_TRAVEL = gql`
  query activity($id: ID!) {
    activity(_id: $id) {
      _id
      who
      how
      arrive
      depart
      postedBy {
        _id
        firstName
        lastName
      }

    }
  }
`;
