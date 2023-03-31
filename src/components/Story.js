import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Speech from 'react-speech';
import Text from './Text'


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
        {
            story.map(items =>{
                return(        
                    <div key={items.id}>
                    <h2>{items.name}</h2>
                    <h4>{items.story}</h4>
                    <button onClick={() => {
          console.log("Button start clicked");
          handleGenerate();
        }} >START </button>
        <Link to ={`/`}> <button> Back To Menu </button></Link>
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
