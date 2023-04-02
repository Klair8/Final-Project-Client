import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import StoriesPage from './components/StoriesPage';
import Story from './components/Story';
import './App.css';
import HomePage from './components/HomePage';



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
          <Route path='/' element={<HomePage/>} />
          <Route path='/stories/age-3-5' element={<StoriesPage/>} />
          <Route path='/story/:id' element={<Story/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
