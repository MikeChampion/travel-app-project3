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
