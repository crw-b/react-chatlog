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

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={entryData} onUpdateEntry={updateEntry}></ChatLog>
      </main>
    </div>
  );
};

export default App;
