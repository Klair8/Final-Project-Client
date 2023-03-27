import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Speech from 'react-speech';
import Text from './Text'

let timer;

const Story = (props) =>{
    const [story,setStory] = useState([])
    const [started, setStarted] = useState(false);
    const [text, setText] = useState("");
   
    useEffect (()=>{
        fetch('/api/story')
        .then(res => res.json())
        .then(data => {
          setStory(data)
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
        let i = -1;
        timer = setInterval(() => {
          i++;
          if (i === Text.length - 1) clearInterval(timer);
          setText((prev) => prev + Text[i]);
        }, 20);
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
                    <Speech onClick={handleGenerate} 
                    stop={true} 
                    pause={true} 
                    resume={true}  
                    text={items.story} voice="Google UK English Female" />
                    <Text/>
                    </div>
                         )
                        })
                    }
                 
                      </>
        
    )
}

export default Story
