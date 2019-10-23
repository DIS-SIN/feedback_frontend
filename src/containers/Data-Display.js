import React from 'react';
import { Row, Container } from 'reactstrap';
import FeedbackDisplay from '../components/feedback/FeedbackDisplay';

const Data = () => (
  <Container>
    <Row className="flex">
      <h1 className="sr-only">{__('Feedback Display')}</h1>
      <FeedbackDisplay />
    </Row>
  </Container>
);

export default Data;
