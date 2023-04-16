import React from 'react'
import NavBar from './NavBar';
import {Link} from 'react-router-dom';


const Favorite = () => {
    const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem('favorites')) || []);
    console.log('favorites', favorites);
    
  
    const handleDelete = (id) => {
    console.log('favID', id) // get the correct ID with items[0]
    const updatedFavorites = favorites.filter(fav => fav[0].id !== id);
    console.log('updatedFavorites', updatedFavorites)
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return(
        <div>
            <NavBar/>
        <div className='favorite'>
        <h1> Favorite Stories </h1>
        <div className='favoritetable'>
        <table>
        <tr>
          <th>TITLE</th>
          <th>STORY TIME </th>
          <th>DELETE</th>
        </tr>
         {
            favorites.map(items =>(
                favorites && items && items[0] &&
                <tr key={items[0].id}>
                    <td><h5>{items[0].title}</h5></td>
                    <td><button className='buttonFav'> <Link to ={`/story/${(items[0].id)}`} state={(items[0].id)} onClick={() => console.log('story.id', (items[0].id))}> Read </Link></button></td> 
                    <td><button className='buttonFav' onClick={() => handleDelete(items[0].id)}> Delete </button></td> 
                    </tr>
               )
            )
            }
          </table>
        </div>
        </div>
        </div>
    )
}




export default Favorite