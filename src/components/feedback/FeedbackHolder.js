import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import PropTypes from 'prop-types';
import { getFeedback } from '../../gql/queries';

const FeedbackHolder = (props) => {
  const { loading, error, data } =
    useQuery(getFeedback, {
      variables: { appID: props.id },
      pollInterval: 10000,
    });

  if (loading) return __('Loading...');
  if (error) return `${__('Error')}! ${error.message}`;

  const feedbackList = data.feedback.map(item => (
    <li key={item.id} className="card mb-2 d-inline-block d-flex">
      <div className="card-body">
        <p className="card-text">{item.comment}</p>
        <div className="text-muted">{item.email || __('Anonymous')}</div>
        <small className="text-muted">{item.createdAt}</small>
      </div>
    </li>
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
