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
          <br></br>
            <h2>STORIES FOR KIDS AGES 3-5 </h2>
            <br></br>
            {
                stories.map(story=>{
                  return(
                    <div className="storiescard" key={story.id}>
                        <h2> {story.title}</h2>
                        <p> {story.description}</p>
                        <br></br>
                        <Link to ={`/${story.id}`}> Read </Link>
                        </div>
                  )  
                })
            }
        </div>
    )
}


export default Stories