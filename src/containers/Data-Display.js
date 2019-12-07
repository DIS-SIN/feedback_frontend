import React from 'react';
import { Row, Container } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import PropTypes from 'prop-types';
import { getApps } from '../gql/queries';
import FeedbackDisplay from '../components/feedback/FeedbackDisplay';


const Data = (props) => {
  const { loading, error, data } = useQuery(getApps);
  if (loading) return __('Loading...');
  if (error) return `${__('Error')}! ${error.message}`;

  return (
    <Container>
      <Row className="flex">
        <h1 className="sr-only">{__('Feedback Display')}</h1>
        {props.isLoggedIn ?
          <FeedbackDisplay
            applications={data.applications}
          />
          : __('Please login')
        }
      </Row>
    </Container>
  );
};

Data.propTypes = {
  isLoggedIn: PropTypes.number.isRequired,
};

export default LocalizedComponent(Data);
