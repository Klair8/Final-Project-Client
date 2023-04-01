import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar';


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
          <NavBar/>
            <h2>STORIES FOR KIDS AGES 3-5 </h2>
            {
                stories.map(story=>{
                  return(
                    <div key={story.id}>
                        <h2> {story.name}</h2>
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