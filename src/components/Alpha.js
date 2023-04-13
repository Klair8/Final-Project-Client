import NavBar from "./NavBar"
import React from 'react'
import { useState } from "react";
import {TextToSpeech} from 'tts-react'


const Alpha =()=>{
    const abc = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); 

    const abcCapital = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)); 

    const words = ["Apple","Bat","Citrus","Dog","Egg","Flower","Giraffe","Hat","Ice","Jelly","Koala","Limonade","Marmelade","Ninja","Orange","Pear","Queen","Radio","Season", "Truck","Umbrella","Van","Watch","	Xylophone","Yoga","Zebra"]
    console.log('words',words)

    const combinedArray = []; // new array 
    for (let i = 0; i < abc.length; i++) {
    combinedArray.push(abcCapital[i], abc[i], words[i]);
    }
    console.log('combinedArray', combinedArray);

    const [box, setBox] = useState (false);
    const [clickedLetter, setClickedLetter] = useState(null);

    const showBox = (letter) => {
        const index = combinedArray.indexOf(letter);
        console.log('indexletter',index)

        if (index !== -1 && index < combinedArray.length - 1) {
          const clickedLetter = combinedArray[index];
        //   console.log('clickedLetter',clickedLetter)
          const nextLetter = combinedArray[index + 1];
        //   console.log('nextLetter',nextLetter)
          const word = combinedArray[index + 2];
          // console.log('word',word)
          setClickedLetter([clickedLetter, nextLetter, word]);
          setBox(true);
        }
      };
  
      const closeBox =()=>{
        setBox(false);
    }

    return (
        <div>
          <NavBar />
          <div className="alpha">
          <h1>Easy Alphabet</h1>
          <div className="letter">
            {abcCapital.map((letter) => {
                //  const letterColor = letter.toLowerCase();
                 const letterColor = letter.toLowerCase() === "a" ? "a" : letter.toLowerCase();
              return (
                <div key={letter.id}>
                  <button onClick={() => showBox(letter)} className={letterColor}>{letter}</button>
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
                          lang="en"
                          position="leftCenter"
                          rate={0.55}
                          size="large"
                          volume={0.85}
                        >
                {clickedLetter && (
                  <div key={clickedLetter} >
                        <h3>{clickedLetter[0]}</h3> 
                        <h3>{clickedLetter[1]}</h3>
                        <h3> such as : {clickedLetter[2]}</h3>
                  </div>
                )}
                </TextToSpeech>
                <button onClick={()=>closeBox()}>X</button>
              </div>
            )}
          </div>
        </div>
        </div>
      );
    };
    
export default Alpha