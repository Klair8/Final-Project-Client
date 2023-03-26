import React from 'react'
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5002/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  return (
    <div className="App">
        <h1>{message}</h1>
    
    </div>
  );
}

export default App;
