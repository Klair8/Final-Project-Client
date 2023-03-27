import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import Stories from './components/Stories'
import './App.css';


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5002/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  return (
    <BrowserRouter>
    <div className="App">
     <p>{message}</p>
     <Routes>
          <Route path='/' element={<Stories/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
