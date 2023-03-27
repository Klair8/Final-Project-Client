import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


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
        {
            story.map(items =>{
                return(
                    <div key={items.id}>
                    <h4>{items.story}</h4>
                    <Link to ={`/`}> Back to the Menu</Link>
                    </div>
                         )
                        })
                    }
                      </>
        
    )
}

export default Story