import { useState, useEffect } from 'react';
import axios from 'axios';

function Translation() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append('q', input);
    encodedParams.append('target', to);
    encodedParams.append('source', from);

    const Translation = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'd91fdc477fmsh9e8d04c8a086ea6p1418bajsnb51f10d99b41',
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
          'X-RapidAPI-Key': 'd91fdc477fmsh9e8d04c8a086ea6p1418bajsnb51f10d99b41',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
      })
      .then((res) => {
        console.log(res);
        setOptions(res.data.data.languages);
      });
  }, []);

  return (
    <div className="App">
      <div>
        From ({from}):
        <select onChange={(e) => setFrom(e.target.value)} style={{ fontSize: '16px', color: 'black' }}>
          {options.map((opt) => (
            <option key={opt.language} value={opt.language}>
              {opt.name}
            </option>

          ))}
        </select>
        To({to}):
        <select onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.language} value={opt.language}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
        
      <div>
        <textarea cols="50" rows="8" onInput={(e) => setInput(e.target.value)}></textarea>
      </div>

      <div>
        <textarea cols="50" rows="8" value={output}></textarea>
      </div>

      <div>
        <button onClick={(e) => translate()}>Translate</button>
      </div>
    </div>
  );
}

export default Translation;
