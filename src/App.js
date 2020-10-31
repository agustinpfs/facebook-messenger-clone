import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: "agux", text: "hey guys"},
    {username: "agux", text: "hey guys"}]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition

  // useEffect(() => {
  //   //run code here..
  //   // if its blank inside [], this code runs once when the app component loads 
  //   // if we have a variable like input, it runs every time input changes
  // }, []) //condition

∫

  console.log(input);
  console.log(messages);


  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message goes 
    setMessages([...messages, {username: username, text: input}]);
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
      {/* wrapped in form tag and add type="submit in Button tag enable "Enter key" and submit" */}
      {/* messages themselves */}

    {

    messages.map(message => 
      // <p>{messages}</p>
      // <Message text={messages} />
      // <Message username={messages.username} text={messages.text} />
      <Message username={username} message={message} />
    )
    
    }

    </div>
  );
}

export default App;
