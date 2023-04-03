import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Translation = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ja');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  useEffect(() => {
    const translate = {
      method: 'POST',
      url: 'https://affordable-translate.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd91fdc477fmsh9e8d04c8a086ea6p1418bajsnb51f10d99b41',
        'X-RapidAPI-Host': 'affordable-translate.p.rapidapi.com',
      },
      data: '{"text":"Hello World","from":"","to":"ja"}',
    };

    axios
    .request(translate)
    .then(function (response) {
      setTranslatedText(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}, [selectedLanguage]);

  return (
    <div>
    <p>{translatedText}</p>
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="de">German</option>
      <option value="it">Italian</option>
    </select>
  </div>
  )
};

export default Translation;
