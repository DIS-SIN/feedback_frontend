import React from 'react';
import PropTypes from 'prop-types';

const FeedbackTile = props => (
  <li className="card mb-2 d-inline-block d-flex" key={props.id}>
    <div className="card-body">
      <p className="card-text">
        {props.comment}
      </p>
      <div className="text-muted">{props.email || __('Anonymous')}</div>
      <small className="text-muted">{props.createdAt}</small>
    </div>
  </li>
);

FeedbackTile.propTypes = {
  id: PropTypes.string,
  email: PropTypes.string,
  createdAt: PropTypes.string,
  comment: PropTypes.string,
};

FeedbackTile.defaultProps = {
  id: '1',
  email: 'bryan.robitaille@da-an.ca',
  createdAt: 'Some date and time',
  comment: 'This is the default text',
};

export default FeedbackTile;
