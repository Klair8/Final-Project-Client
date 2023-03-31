import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Speech from 'react-speech';
import Text from './Text'
import { useTts } from 'tts-react'

const Story = (props) =>{
    const [story,setStory] = useState([])
    const [started, setStarted] = useState(false);
    const [text, setText] = useState("");
   
    useEffect (()=>{
        fetch('/api/story')
        .then(res => res.json())
        .then(data => {
          setStory(data)
          console.log('data',data)
        })
        .catch(e => {
          console.log(e);
        })
    },[])



    const handleGenerate = () => {
        if (started) {
          return;
        }

        setStarted(true);
        let i = 0 ; // initialize the variable of the current index
        const timer = setInterval(() => {
          i++;
          if (i === text.length ) clearInterval(timer);
          setText((prev) => prev + Text[i]);
        }, 100);
        console.log("Started typing");  
      };
      


    return(
        <>
          <h1>Story Page</h1>
          <Link to ={`/`}> Back to the Menu</Link>
         
        {
            story.map(items =>{
                return(        
                    <div key={items.id}>
                    <h4>{items.story}</h4>
                    <button onClick={() => {
          console.log("Button start clicked");
          handleGenerate();
        }} >START </button>
        <br></br>
        <br></br>
         {started && (
              <Speech
                text={items.story}
                stop={true}
                pause={true}
                resume={true}
                voice="Google UK English Female"
                rate="0.75"
              />
            )}
            <br></br>
            <br></br>
            {/* {started && 
            <Text 
            text={items.story}
         />} */}

          </div>
        );
      })}
    </>
  );
};
export default Story
