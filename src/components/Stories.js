import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const Stories =(props)=>{
    const [stories, setStories] = useState([])

    useEffect(()=>{
      const getStories = async ()=>{
        try{
            const res = await fetch('/api/story')
            const data = await res.json()
            setStories(data)
            console.log('data',data)
        } catch(e){
            console.log(e)
        }
       
      }
      getStories()
    },[])

    return(
        <div>
            <h2>Choose the stories</h2>
            {
                stories.map(story=>{
                  return(
                    <div key={story.id}>
                        <h2> {story.name}</h2>
                        <p>Level 1</p>
                        <p>Short Description</p>
                        <Link to ={`/${story.id}`}> Show </Link>
                        </div>
                  )  
                })
            }
        </div>
    )
}


export default Stories