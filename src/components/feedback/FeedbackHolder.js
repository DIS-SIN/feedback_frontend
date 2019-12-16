import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import PropTypes from 'prop-types';
import { getFeedback } from '../../gql/queries';
import FeedbackTile from './FeedbackTile';

const FeedbackHolder = (props) => {
  const { loading, error, data } =
    useQuery(getFeedback, {
      variables: { appID: props.id },
      pollInterval: 10000,
    });

  if (loading) return __('Loading...');
  if (error) return `${__('Error')}! ${error.message}`;

  const feedbackList = data.feedback.map(item => (
    <FeedbackTile
      key={item.id}
      email={item.email}
      comment={item.comment}
      created={item.created}
      botScore={item.botScore}
    />

  ));

  return (
    <ul sm="4" className="mb-3">
      {feedbackList}
    </ul>
  );
};

FeedbackHolder.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LocalizedComponent(FeedbackHolder);
