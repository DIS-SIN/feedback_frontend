import React, { useState } from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import LocalizedFeedbackSelector from './FeedbackSelector';
import LocalizedFeedbackHolder from './FeedbackHolder';

const FeedbackDisplay = (props) => {
  const [app, setApp] = useState(props.applications[0].id);
  const changeApp = (changedTo) => {
    setApp(changedTo.target.value);
  };

  return (
    <React.Fragment>
      <Row className="flex col-12">
        <LocalizedFeedbackSelector
          handleChange={changeApp}
          applications={props.applications}
        />
      </Row>
      <Row className="flex col-12">
        <LocalizedFeedbackHolder
          id={app}
        />
      </Row>
    </React.Fragment>
  );
};

FeedbackDisplay.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default FeedbackDisplay;
