import { gql } from 'graphql-tag';

export const QUERY_USER = gql`
  {
    user {
      username
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
      votes {
        _id
      }
      voteCount
      postedBy {
        _id
        username
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
      votes {
        _id
      }
      voteCount
      postedBy {
        _id
        username
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
      notes
      postedBy {
        _id
        username
    }
    
  }
}
`;

export const QUERY_TRAVEL = gql`
  query travel($id: ID!) {
    activity(_id: $id) {
      _id
      who
      how
      arrive
      depart
      notes
      postedBy {
        _id
       username
      }

    }
  }
`;
