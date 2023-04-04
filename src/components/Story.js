import {useState,useEffect} from 'react';
import {useLocation } from 'react-router-dom';
import {TextToSpeech} from 'tts-react'
import NavBar from './NavBar';
import axios from 'axios';


const Story = (props) => {
  const location = useLocation();
  const id = location.state
  console.log('props',id)

  const [story, setStory] = useState([]);
  const [started, setStarted] = useState(false);

  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  // const [language, setLanguage] = useState('en-AU');
    
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

    const encodedParams = new URLSearchParams();
    encodedParams.append('q', input);
    encodedParams.append('target', to);

    const Translation = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      },
      data: encodedParams,
    };

    axios
      .request(Translation)
      .then(function (response) {
        setOutput(response.data.data.translations[0].translatedText);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
      })
      .then((res) => {
        console.log(res);
        setOptions(res.data.data.languages);
      });
  }, []);

  const handleLanguageChange = (e, type) => {
    const value = e.target.value;
    if (type === 'to') {
      setTo(value);
    } else if (type === 'from') {
      setFrom(value);
    }
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
              <br></br>
          Translate to ({to}):
          <select value={to} onChange={(e) => handleLanguageChange(e, "to")}>
              {options
                .filter((opt) => ["fr", "es", "de"].includes(opt.language))
                .map((opt) => (
                  <option key={opt.language} value={opt.language}>
                    {opt.language}
                  </option>
                ))}
            </select>
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
                    <div className="story-text">{items.story.split()}</div>
                  </TextToSpeech>
                </div>
              )}
            </div>
          );
        })}
      </div>
      )}
    
  
  
  export default Story