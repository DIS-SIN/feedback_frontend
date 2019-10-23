import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { getApps } from '../../gql/queries';
import FeedbackSelector from './FeedbackSelector';
import FeedbackHolder from './FeedbackHolder';

const FeedbackDisplay = () => {
  const [app, setApp] = useState('');
  const changeApp = (changedTo) => {
    setApp(changedTo.target.value);
  };

  const { loading, error, data } = useQuery(getApps);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <React.Fragment>
      <Row className="flex">
        <FeedbackSelector
          handleChange={changeApp}
          applications={data.applications}
        />
      </Row>
      <Row className="flex">
        <FeedbackHolder
          appID={app}
        />
      </Row>
    </React.Fragment>
  );
};

export default FeedbackDisplay;
