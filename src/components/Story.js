import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Speech from 'react-speech';
import Text from './Text'


const Story = (props) =>{
    const [story,setStory] = useState([])
   
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
  
    
    return(
        <>
          <h1>Story Page</h1>
          <Link to ={`/`}> Back to the Menu</Link>
         
        {
            story.map(items =>{
                return(
                    
                    <div key={items.id}>
                    <h4>{items.story}</h4>
                    <Speech  
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