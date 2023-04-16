import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import { useState, useEffect } from "react";
import StoriesPage from './components/StoriesPage';
import StoriesLevelOne from './components/StoriesLevelOne';
import StoriesLevelTwo from './components/StoriesLevelTwo';
import StoriesLevelThree from './components/StoriesLevelThree';
import StoriesAdv from './components/StoriesAdv';
import Story from './components/Story';
import './App.css';
import HomePage from './components/HomePage';
import Alpha from './components/Alpha';
import Favorite from './components/Favorite';
import Links from './components/Links';
import StoriesSpace from './components/StoriesSpace';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/stories/level1' element={<StoriesLevelOne/>} />
          <Route path='/stories/level2' element={<StoriesLevelTwo/>} />
          <Route path='/stories/level3' element={<StoriesLevelThree/>} />
          <Route path='/stories/adventure' element={<StoriesAdv/>} />
          <Route path='/stories/space' element={<StoriesSpace/>} />
          <Route path='/kids-stories' element={<StoriesPage/>} />
          <Route path='/story/:id' element={<Story/>} />
          <Route path='/EasyA' element={<Alpha/>} />
          <Route path='/CoolLinks' element={<Links/>} />
          <Route path='/Favorite' element={<Favorite/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
