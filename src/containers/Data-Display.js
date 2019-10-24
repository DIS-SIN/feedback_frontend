import React from 'react';
import { Row, Container } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { getApps } from '../gql/queries';
import FeedbackDisplay from '../components/feedback/FeedbackDisplay';

const Data = () => {
  const { loading, error, data } = useQuery(getApps);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Container>
      <Row className="flex">
        <h1 className="sr-only">{__('Feedback Display')}</h1>
        <FeedbackDisplay
          applications={data.applications}
        />
      </Row>
    </Container>
  );
};

export default Data;
