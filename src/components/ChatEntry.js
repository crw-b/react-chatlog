import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const onHeartButtonClick = () => {
    const updatedEntry = {
      sender: props.sender,
      id: props.id,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };
    props.onUpdate(updatedEntry);
  }
  const heart = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button onClick={onHeartButtonClick}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.instanceOf(Date).isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
