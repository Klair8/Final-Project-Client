import {useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react';
import NavBar from './NavBar';
import {TextToSpeech} from 'tts-react'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

console.log('key',process.env.REACT_APP_API_KEY)
const Key = process.env.REACT_APP_API_KEY;

const Story =(props)=>{
const location = useLocation();
const id = location.state;
console.log('props Id story',id);

const [story, setStory] = useState([]);
const [started, setStarted] = useState(false);
const [selectedWord, setSelectedWord] = useState (null);
const [definition, setDefinition] = useState('');
const [isFavorite, setToFavorite] = useState(false);

useEffect (()=>{
fetch(process.env.REACT_APP_SERVER_URL+`/api/story/${id}`)
.then (response => response.json())
.then (data => {
    setStory(data)
    console.log('storydata', data)
})
.catch(err =>  {
    console.log(err)})
}, []);


// function to "open" the started part
const handleGenerate =()=>{
    if (started) {
        return;
    }
    setStarted(true);
}

//function for the dictionnary
const handleWordClick = (word) => {
    console.log('Clickword',word)
    setSelectedWord(word);

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
      }
      fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
      .then (response => response.json())
      .then ((response) =>{
      const definition = response.definition;
      console.log('def',definition);
      const definitionBefore = definition ? definition.split('.')[1] : 'Oups this definition isnt available' ; // Extrac part of def. 
      setSelectedWord(word);
      setDefinition(definitionBefore);
    })
      .catch(err => console.log(err)) 
 };

//function to close the dictionnary box
const closedefBox =()=>{
    setSelectedWord('');
    setDefinition('');
}

//function add to favorite
 const handleFavorite =()=>{
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some(fav => fav.id === id);
    console.log('favstory.id',id)

    if (!isAlreadyFavorite) {
        favorites.push(story);
        console.log('favoritestory',story)
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
      setToFavorite(!isFavorite);
    };

return(
    <div className="storyPage">
        <NavBar/>
        <div >
        { 
            story.map((items)=>{
              return(
                <div key={items.id} className="storydiv">
                    <h2>{items.title}</h2>
                    <p> created by {items.author}</p>
                    <button className='button-storypage' onClick={()=>{
                    handleGenerate();
                    }}> Start The Story </button>
                    <h5> If you don't understand a word, click on it to get the definition !!</h5>
                    <br></br>
                       <FontAwesomeIcon
                        icon={faHeart}
                        className="iconfav"
                        size="xl"
                        style={{ color: isFavorite ? '#c977cf' : 'black' }}
                        onClick={() => handleFavorite()}
                        />
                        { selectedWord && definition && (
                        <div className="definitionBox">
                                <TextToSpeech
                            align="horizontal"
                            allowMuting
                            markBackgroundColor="pink"
                            markColor="white"
                            markTextAsSpoken
                            lang="en"
                            position="leftCenter"
                            pitch={0.90}
                            rate={0.70}
                            size="large"
                            volume={0.90}
                          >
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                            <h4>{selectedWord} : </h4>
                            <h5> {definition} </h5>
                            </TextToSpeech> 
                            <button onClick={()=>closedefBox()}> x </button>
                        </div>  
                       
                            )
                            }
                    {started && (
                        <div className="tts">
                        <TextToSpeech
                          align="horizontal"
                          allowMuting
                          markBackgroundColor="pink"
                          markColor="white"
                          markTextAsSpoken
                          lang="en"
                          position="leftCenter"
                          pitch={0.90}
                          rate={0.70}
                          size="large"
                          volume={0.90}
                        >
                       <div className="story-text">
                          {items.story.split(' ').map((word, index) => {
                    if (word.endsWith('.') && index % 2 === 0) {
                    // Add a line break after the sentence
                    return (
                        <React.Fragment key={index}>
                            <span onClick={() => handleWordClick(word)}>{word}</span>
                            <br/> 
                            <br/> 
                        </React.Fragment>
                    );
                    } else {
                    return (
                        <span key={index} onClick={() => handleWordClick(word)}>
                        {word}{' '}
                        </span>
                    );
                    }
                    })}
                    </div>
                        </TextToSpeech>
                        <br></br>
                        </div>
                    )}
                </div>     
                )
            })
        }
        </div>
    </div>
)
}

export default Story