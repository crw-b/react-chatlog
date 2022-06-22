import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
    const chatComponents = props.entries.map(chat => {
        return(
            <ChatEntry 
            sender={chat.sender} 
            id={chat.id}
            body={chat.body} 
            timeStamp={chat.timeStamp} 
            liked={chat.liked}
            onUpdate={props.onUpdateEntry}
            ></ChatEntry>
        );
    });

    return (
        <section className='chat-log'>
            {chatComponents}
        </section>
    )
};

export default ChatLog;

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        id: PropTypes.number,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool
    })),
    onUpdateEntry: PropTypes.func
};