import React from 'react'
import NavBar from './NavBar';


const Favorite =()=>{
const favStory =JSON.parse(localStorage.getItem('favorites')) || [];
console.log('favStory',favStory); 

    return(
        <div>
            <NavBar/>
        <h1> Favorite Stories </h1>
         {
            favStory.map(items =>(
                <div key={items.id}>
                    <h3>{items[0].title}</h3>
                    <p> By {items[0].author}</p>
                    </div>
            ))
         }
        </div>
    )
}

export default Favorite