import React from 'react'
import NavBar from './NavBar';



const Favorite = () => {
    const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem('favorites')) || []);
    console.log('favorites', favorites);
  
    const handleDelete = (id) => {
        console.log('favID', id) // get the correct ID
        
      const updatedFavorites = favorites.filter(fav => fav.id !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };


    return(
        <div>
            <NavBar/>
        <h1> Favorite Stories </h1>
         {
            favorites.map(items =>(
                <div key={items[0].id}>
                    <h3>{items[0].title}</h3>
                    <p> By {items[0].author}</p>
                    <button onClick={() => handleDelete(items[0].id)}>Delete</button> 
                    </div>
            ))
         }
        </div>
    )
}

export default Favorite