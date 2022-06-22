import React, { useState, useEffect } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);

  const updateEntry = updatedEntry => {
    const entries = entryData.map(entry => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntryData(entries);
  };

  const totalLikes = entryData.reduce((total, entry) => {
    return total + entry.liked;
  }, 0)

  let local = '';
  let remote = '';

  const changeRemote = (color) => {
    remote = color;
  };

  const changeLocal = (color) => {
    local = color;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <div id="color">
            {entryData.sender}'s Color:
            <button onClick={changeRemote('red')} className='red'>●</button>
            <button onClick={changeRemote('orange')} className='orange'>●</button>
            <button onClick={changeRemote('yellow')} className='yellow'>●</button>
            <button onClick={changeRemote('green')} className='green'>●</button>
            <button onClick={changeRemote('blue')} className='blue'>●</button>
            <button onClick={changeRemote('purple')} className='purple'>●</button>
          </div>
          {totalLikes} ❤️s
          <div id="color">
            {entryData.sender}'s Color:
            <button onClick={changeLocal('red')} className='red'>●</button>
            <button onClick={changeLocal('orange')} className='orange'>●</button>
            <button onClick={changeLocal('yellow')} className='yellow'>●</button>
            <button onClick={changeLocal('green')} className='green'>●</button>
            <button onClick={changeLocal('blue')} className='blue'>●</button>
            <button onClick={changeLocal('purple')} className='purple'>●</button>
          </div>
        </section>
      </header>
      <main>
        <ChatLog entries={entryData} onUpdateEntry={updateEntry} remoteColor={remote} localColor={local}></ChatLog>
      </main>
    </div>
  );
};

export default App;
