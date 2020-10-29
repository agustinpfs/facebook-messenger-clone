import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hola', 'hey']);

  console.log(input);
  console.log(messages);


  const sendMessage = (event) => {
    // all the logic to send a message goes 
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello!!</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button>Send message</button>
      {/* input field */}
      {/* button */}
      {/* messages themselves */}
    </div>
  );
}

export default App;
