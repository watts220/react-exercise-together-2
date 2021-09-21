import React from 'react';
import PropTypes from 'prop-types';
import MsgItem from './MsgItem.js';
import MsgForm from './MsgForm.js';

const MsgBox = props => {
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{props.user.username}</div>

      <ul className="message-list">
        {props.messages.map((message, index) => (
          <MsgItem key={index} message={message} receiver={props.user.username} />
        ))}
      </ul>
      <MsgForm messages={props.messages} username={props.user.username} sendHandler={props.sendHandler} />
    </div>
  );
};

MsgBox.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  sendHandler: PropTypes.func.isRequired,
};

export default MsgBox;