import React from 'react';
import ChatEntry from './ChatEntry';
import TimeStamp from './TimeStamp';

const ChatLog = (props) => {
    const chatComponents = props.entries.map(chat => {
        return(
            <ChatEntry sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp}></ChatEntry>
        );
    });

    return (
        <section>
            {chatComponents}
        </section>
    )
};

export default ChatLog;