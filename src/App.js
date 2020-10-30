import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hola', 'hey']);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition

  // useEffect(() => {
  //   //run code here..
  //   // if its blank inside [], this code runs once when the app component loads 
  //   // if we have a variable like input, it runs every time input changes
  // }, []) //condition

  useEffect(() => {
    setUsername(prompt('enter your name'))
  }, [])

  console.log(input);
  console.log(messages);


  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message goes 
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello!!</h1>
      <h2>welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send message</Button>
        </FormControl>
      </form>
      {/* messages themselves */}

    {
    messages.map(messages => 
      // <p>{messages}</p>
      <Message text={messages} />
      )}

    </div>
  );
}

export default App;
