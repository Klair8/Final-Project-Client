import React, { useState } from 'react';
import axios from 'axios';

const Translation = () => {
  const [selectedText, setSelectedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleTranslation = () => {

    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", "it");
    encodedParams.append("text", selectedText);
    

    const translate = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'd91fdc477fmsh9e8d04c8a086ea6p1418bajsnb51f10d99b41',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams ,
    };

    axios
      .request(translate)
      .then(function (response) {
        setTranslatedText(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <textarea
        value={selectedText}
        onChange={(e) => setSelectedText(e.target.value)}
      />
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
      </select>
      <button onClick={handleTranslation}>Translate</button>
      {translatedText && <p>{translatedText}</p>}
    </div>
  );
};

export default Translation;
