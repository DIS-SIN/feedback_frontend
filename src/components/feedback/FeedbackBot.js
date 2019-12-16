import React from 'react';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';


const FeedbackBot = props => (
  <div>
    {__('feedback bot wording')}
  </div>
);

FeedbackBot.propTypes = {
  score: PropTypes.number,
};

FeedbackBot.defaultProps = {
  score: 1
};

export default LocalizedComponent(FeedbackBot);
