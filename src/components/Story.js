import {useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react';
import NavBar from './NavBar';
import {TextToSpeech} from 'tts-react'


console.log('key',process.env.REACT_APP_WEATHER_API_KEY)
// const Key= process.env.REACT_APP_WEATHER_API_KEY;


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
fetch(`/api/story/${id}`)
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
    console.log('started')
}

//function for the dictionnary
const handleWordClick = (word) => {
    console.log('Clickword',word)
    setSelectedWord(word);

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'Key',
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
    <div>
        <NavBar/>
        {
            story.map((items)=>{
                return(
                    <div key={items.id} className="storydiv">
                        <h2>{items.title}</h2>
                        <p>{items.author}</p>
                        <button onClick={()=>{
                        console.log('buttonstartclicked')
                        handleGenerate();
                    }}> Start Story </button>
                       <button onClick={() => handleFavorite()}>  {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} </button>  
                    {started && (
                        <div className="tts">
                        <TextToSpeech
                          align="horizontal"
                          allowMuting
                          markBackgroundColor="pink"
                          markColor="white"
                          markTextAsSpoken
                          lang="en-AU"
                          position="leftCenter"
                          rate={0.85}
                          size="large"
                          volume={0.90}
                        >
                        <div className="story-text">
                        {items.story.split(' ').map((word, index) => (
                    <span key={index} onClick={() => handleWordClick(word)}>
                      {word}{' '}
                    </span>
                  ))}
                        </div>
                        </TextToSpeech>
                        <div className="definitionBox">
                            <h4>{selectedWord}</h4>
                            <p>{definition}</p>
                            {
                                selectedWord && definition &&(
                                    <button onClick={()=>closedefBox()}>X</button>
                                )
                            }
                        </div>
                        </div>

                    )}
                    </div>     
                )
            })
        }
    </div>
)
}

export default Story