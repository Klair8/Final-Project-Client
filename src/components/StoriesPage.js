import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';


const StoriesPage =(props)=>{
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
          <div className="storiespage">
            <h2>STORIES FOR KIDS AGES 3-5 </h2>
            <br></br>
            <Card style={{ width: '18rem' }}>
            {
                stories.map(story=>{
                  return(
                    <div className="storycontainer" key={story.id}>
                       <Card.Img variant="top" src="holder.js/100px180" />
                       <Card.Body>
                       <Card.Title>{story.title}</Card.Title>
                       <Card.Text>{story.description}</Card.Text>
                        <br></br>
                        <button variant="primary"><Link to ={`/story/${story.id}`} state={story.id} onClick={() => console.log('story.id', story.id)}>Read</Link></button>
                        </Card.Body>  
                        </div>
                  )  
                })
            }
               </Card>
            </div>
        </div>
    )
}


export default StoriesPage