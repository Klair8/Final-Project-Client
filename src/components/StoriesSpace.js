import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';


const StoriesSpace =(props)=>{
    const [stories, setStories] = useState([])

    useEffect(()=>{
      const getStories = async ()=>{
        try{
            const res = await fetch(process.env.REACT_APP_SERVER_URL+'/api/story/')
            const data = await res.json()
            const specificStories = data.filter(story => story.style == "space" )
        setStories(specificStories);
         console.log('dataforspace',specificStories)
        } catch(e){
            console.log(e)
        }
      }
      getStories()
    },[])

    return(
        <div>
          <NavBar/>
          <div className="storiespage">
            <h1>Space Stories !! </h1>
          <div className="storycontainer">
          <br></br>
            {
              stories.map(story=>{
                return(
                  <Card className="card"  key={story.id} style={{ width: '18rem', height:'26rem' , border:'2px solid black' }}>
                    <Card.Img variant="top" src={`${process.env.REACT_APP_SERVER_URL}${story.image_url}`} /> 
                    <Card.Body>
                      <Card.Title>{story.title}</Card.Title>
                      <Card.Text>{story.description}</Card.Text>
                      <br></br>
                      <button className='buttonRead'><Link to ={`/story/${story.id}`} state={story.id} onClick={() => console.log('story.id', story.id)}>Read</Link></button>
                    </Card.Body>  
                  </Card>
                  )  
                })
            }
          </div>
          </div>
        </div>
    )
}


export default StoriesSpace