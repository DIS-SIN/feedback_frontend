/*
* Place your queries here. We have provided an example query.
*/
import gql from 'graphql-tag';

export const getFeedback = gql`
  query getFeedback($appID: ID!) {
    feedback(appID:$appID) {
      id,
      email,
      comment,
      created,
    }
  }
`;

export const getApps = gql`
  query getApps($appID:ID){
    applications(appID:$appID){
      id,
      name,
      type,
    }
  }
`;

