import {useState,useEffect} from 'react';
import {useLocation } from 'react-router-dom';
import {TextToSpeech} from 'tts-react'
import NavBar from './NavBar';
// import axios from 'axios';


const Story = (props) => {
  const location = useLocation();
  const id = location.state
  console.log('props',id)

  const [story, setStory] = useState([]);
  const [started, setStarted] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null); // State to store the selected word
  const [definition, setDefinition] = useState(''); // State to store the definition of the selected word


  // const [options, setOptions] = useState([]);
  // const [to, setTo] = useState('en');
  // const [from, setFrom] = useState('en');
  // const [input, setInput] = useState('');
  // const [output, setOutput] = useState('');

    
  useEffect (()=>{
    fetch(`/api/story/${id}`)
      .then(res => res.json())
      .then(data => {
        setStory(data)
        console.log('data',data)
      })
      .catch(e => {
        console.log(e);
      })
  },[]);

  const handleGenerate = () => {
    if (started) {
      return;
    }
    setStarted(true);
    console.log("Started typing");

    //Translation Part
    // const encodedParams = new URLSearchParams();
    // encodedParams.append('input', story[0].story);  // input value 
    // encodedParams.append('target', to);

    // const Translation = {
    //   method: 'POST',
    //   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'X-RapidAPI-Key': 'd91fdc477fmsh9e8d04c8a086ea6p1418bajsnb51f10d99b41',
    //     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    //   },
    //   data: encodedParams,
    // };

    // axios
    //   .request(Translation)
    //   .then(function (response) {
    //     setOutput(response.data.data.translations[0].translatedText);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };

  // useEffect(() => {
  //   axios
  //     .get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
  //       headers: {
  //         'X-RapidAPI-Key': 'd91fdc477fmsh9e8d04c8a086ea6p1418bajsnb51f10d99b41',
  //         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setOptions(res.data.data.languages);
  //     });
  // }, []);

  // const handleLanguageChange = (e, type) => {
  //   const value = e.target.value;
  //   console.log('valuehandlelang',value)
  //   if (type === 'to') {
  //     setTo(value);
  //   } else if (type === 'from') {
  //     setFrom(value);
  //   }
  // };


      // Accessing each word 
    const handleWordClick = (word) => {
        console.log('Clicked word:', word);
        setSelectedWord(word);
         const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd91fdc477fmsh9e8d04c8a086ea6p1418bajsnb51f10d99b41',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
          }
        }
        fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
          .then(response => response.json())
          // .then(response => console.log(response.definition))
          .then((response) => {

                // Extract first part of definition before comma
      const definition = response.definition;
      console.log('def',definition)
      const definitionBefore = definition ? definition.split('.')[0] : '' ; // Extrac part of def.

      // Set state variables for selected word and the definition
      setSelectedWord(word);
      setDefinition(definitionBefore);
          
          })
          .catch(err => console.error(err));
      };

      const closedefBox = () => {
        setSelectedWord('');
        setDefinition('');
      };
  
    return (
      <div>
        <NavBar />
        {
        story.map((items) => {
          return (
            <div key={items.id} className="storydiv">
              <h2>{items.title}</h2>
              <h4>{items.author}</h4>
              <button
                onClick={() => {
                  console.log('Button start clicked');
                  handleGenerate();
                }}
              >START </button>
               <div>
               <br></br>
               {/* <br></br>
          Translate to ({to}):
          <select value={to} onChange={(e) => handleLanguageChange(e, "to")}>
              {options
                .filter((opt) => ["fr", "es", "de"].includes(opt.language))
                .map((opt) => (
                  <option key={opt.language} value={opt.language}>
                    {opt.language}
                  </option>
                ))}
            </select> */}
            {/* <button onClick={(e) => translate()}>Translate</button> */}
        </div>
              <br></br>
              <br></br>
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
                    rate={0.75}
                    size="large"
                    volume={1}
                  >
                   <div className="story-text">
                  {items.story.split(' ').map((word, index) => (
                    <span key={index} onClick={() => handleWordClick(word)}>
                      {word}{' '}
                    </span>
                  ))}
                </div>
                  </TextToSpeech>
                  <div className="definition-box">
                   <h4>{selectedWord}</h4>
                    <p>{definition}</p>
                    {selectedWord && definition && (
                      <button onClick={closedefBox}>X</button>
                            )}
                  </div>
         

                </div>
              )}
            </div>
          );
        })}
      </div>
      )}

    
  
  
  export default Story