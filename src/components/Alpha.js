import NavBar from "./NavBar"
import React from 'react'
import { useState } from "react";
import {TextToSpeech} from 'tts-react'


const Alpha =()=>{
    const abc = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); 
    // console.log('abc',abc)

    const abcCapital = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)); 
    // console.log('abcCapital',abcCapital)

    const combinedArray = []; // new array 
    for (let i = 0; i < abc.length; i++) {
    combinedArray.push(abcCapital[i], abc[i]);
    }
    console.log('combinedArray', combinedArray);

    const [box, setBox] = useState (false);
    const [clickedLetter, setClickedLetter] = useState(null);

    const showBox = (letterC) => {
        const index = abcCapital.indexOf(letterC);
        console.log('indexletter',index)
        if (index !== -1 && index < combinedArray.length - 1) {
          const clickedLetter = combinedArray[index];
          console.log('clickedLetter',clickedLetter)
          const nextLetter = combinedArray[index + 1];
          console.log('nextLetter',nextLetter)
          setClickedLetter([clickedLetter, nextLetter]);
          setBox(true);
        }
      };
  

      const closeBox =()=>{
        setClickedLetter('');
        setBox(false);
    }

    return (
        <div>
          <NavBar />
          <h1>Easy Alphabet</h1>
          <div className="letter">
            {abcCapital.map((letterC,index) => {
              return (
                <div key={index}>
                  <button onClick={() => showBox(letterC)}>{letterC}</button>
                </div>
              );
            })}
            {box && (
              <div className="letterBox">
                  <TextToSpeech
                          align="horizontal"
                          allowMuting
                          markBackgroundColor="pink"
                          markColor="white"
                          markTextAsSpoken
                          lang="en-AU"
                          position="leftCenter"
                          rate={0.65}
                          size="large"
                          volume={0.90}
                        >
                {clickedLetter && (
                  <div key={clickedLetter}>
                        <h3>{clickedLetter[0]}</h3> 
                        <h3>{clickedLetter[1]}</h3>
                  </div>
                )}
                </TextToSpeech>
                <button onClick={()=>closeBox()}>X</button>
              </div>
            )}
          </div>
        </div>
      );
    };
    
export default Alpha