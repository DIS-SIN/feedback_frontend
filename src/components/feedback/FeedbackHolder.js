import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { getFeedback } from '../../gql/queries';
import FeedbackTile from './FeedbackTile';

const FeedbackHolder = ({ appID }) => {
  const { loading, error, data } =
    useQuery(getFeedback, {
      variables: { appID },
      pollInterval: 5000,
    });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="mt-3 row">
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
    </div>
  );
};

FeedbackHolder.propTypes = {
  appID: PropTypes.string.isRequired,
};

export default FeedbackHolder;
