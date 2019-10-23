import React from 'react';
import PropTypes from 'prop-types';

const FeedbackSelector = props => (
  <form>
    <div className="form-group">
      <label htmlFor="appSelect">
        <span className="font-weight-bold">
          {__('Select an Application')}
        </span>
      </label>
      <select
        id="appSelect"
        className="form-control"
        onChange={props.handleChange}
      >
        {props.applications.map(application => (
          <option key={application.id} value={application.id}>
            {application.name}
          </option>
        ))}
      </select>
    </div>
  </form>
);

FeedbackSelector.propTypes = {
  handleChange: PropTypes.func,
  applications: PropTypes.objectOf(PropTypes.array).isRequired,
};

FeedbackSelector.defaultProps = {
  handleChange: value => (
    // eslint-disable-next-line
    alert(value.target.value)
  ),
};


export default FeedbackSelector;
