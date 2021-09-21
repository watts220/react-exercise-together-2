import React from 'react';
import PropTypes from 'prop-types';

const MsgItem = props => {
  return (
    <li
      className={
        props.message.username === props.receiver ? 'message sender' : 'message recipient'
      }
    >
      <p>{`${props.message.username}: ${props.message.text}`}</p>
    </li>
  );
};

MsgItem.propTypes = {
  message: PropTypes.object.isRequired,
  receiver: PropTypes.string.isRequired,
};

export default MsgItem;