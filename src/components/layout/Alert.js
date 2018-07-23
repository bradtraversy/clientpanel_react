import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Alert = props => {
  const { message, messageType } = props;
  return (
    <div
      className={classnames('alert', {
        'alert-success': messageType === 'success',
        'alert-danger': messageType === 'error'
      })}
    >
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired
};

export default Alert;
