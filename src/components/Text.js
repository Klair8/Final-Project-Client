import {useState,useEffect} from 'react';

const Text = (props) =>{
    const [text,setText] = useState([])
   
    useEffect (()=>{
        fetch('/api/story')
        .then(res => res.json())
        .then(data => {
            setText(data)
        })
        .catch(e => {
          console.log(e);
        })
    },[])

    return(
        <>
         
        {
            story.map(items =>{
                return(
                    
                    <div key={items.id}>
                    <h4>{items.story}</h4>
                    </div>
                         )
                        })
                    }
                 
                      </>
        
    )
}

export default Text