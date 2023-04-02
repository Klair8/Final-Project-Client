import {useState,useEffect} from 'react';
import {Link, useLocation } from 'react-router-dom';
import {TextToSpeech} from 'tts-react'
import NavBar from './NavBar';


const Story = (props) =>{
const location = useLocation();
const id = location.state
console.log('props',id)
    const [story,setStory] = useState([])
    const [started, setStarted] = useState(false);

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
    },[])

    const handleGenerate = () => {
        if (started) {
          return;
        }
        setStarted(true);
        console.log("Started typing");  
      };
      

      const selectedText =()=>{
      console.log(window.getSelection().toString())

      }

    return(
        <>
        <NavBar/>
        {
            story.map(items =>{
                return(        
                    <div key={items.id} className="storydiv">
                    <h2>{items.title}</h2>
                    <h4>{items.author}</h4>
                    <button onClick={() => {
          console.log("Button start clicked");
          handleGenerate();
        }} >START </button>
        <Link to ={`/`}> <button> Back To Menu </button></Link>
        <br></br>
        <br></br>
{started && (
  <div className="tts">
    <TextToSpeech className="ttstry"
  align="horizontal"
  allowMuting
  markBackgroundColor="pink"
  markColor="white"
  markTextAsSpoken
  lang="en-AU"
  position="leftCenter"
  rate={0.75}
  size="large"
  volume={1}>
    <div onMouseUp={selectedText} className="story-text">
  <h4>{items.story}</h4>
  {/* <p>{items.story.slice(0, 300)}</p> */}
  </div>
</TextToSpeech>
</div>
)}

          </div>
        );
      })}
    </>
  );
};
export default Story
