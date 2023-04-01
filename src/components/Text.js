import { useState, useEffect } from 'react';


const Text = ({ text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 160);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      { 
        text.slice(0, currentIndex).split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))
      }
    </>
  );
};

export default Text;
