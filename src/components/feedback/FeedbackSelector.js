import React from 'react';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

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
  applications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
};

FeedbackSelector.defaultProps = {
  handleChange: value => (
    // eslint-disable-next-line
    alert(value.target.value)
  ),
  applications: [{ id: '1', name: 'Test application', type: 'Web' }],
};


export default LocalizedComponent(FeedbackSelector);
