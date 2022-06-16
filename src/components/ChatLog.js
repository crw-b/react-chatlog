import React from 'react';
import ChatEntry from './ChatEntry';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';
import './ChatLog.css';

const ChatLog = (props) => {
    const chatComponents = props.entries.map(chat => {
        return(
            <ChatEntry sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp} liked={chat.liked}></ChatEntry>
        );
    });

    return (
        <section className='chat-log'>
            {chatComponents}
        </section>
    )
};

export default ChatLog;