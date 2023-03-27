import {useState, useEffect} from 'react'

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
            {
                stories.map(story=>{
                  return(
                    <div key={story.id}>
                        <h2> {story.name}</h2>
                        </div>
                  )  
                })
            }
        </div>
    )
}


export default Stories