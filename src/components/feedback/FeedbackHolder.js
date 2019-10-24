import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { getFeedback } from '../../gql/queries';
import FeedbackTile from './FeedbackTile';

const FeedbackHolder = (props) => {
  const { loading, error, data } =
    useQuery(getFeedback, {
      variables: { appID: props.id },
      pollInterval: 10000,
    });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul sm="4" className="mb-3">
      {
        data.feedback.map(item => (
          <FeedbackTile
            id={item.id}
            createdAt={item.created}
            email={item.email}
            comment={item.comment}
          />
        ))
      }
    </ul>
  );
};

FeedbackHolder.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FeedbackHolder;
