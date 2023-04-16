import React from 'react'
import NavBar from './NavBar';
import {Link} from 'react-router-dom'



const HomePage =()=>{
    return(
            <div className="Homepage">
                 <NavBar/>
                 <h1>Dream Learning</h1>
                <div className="section">
            <div className="Browseby">
                <h2>Browse By Age </h2>
                <br></br>
                <Link to="/stories/level1">  
                <button className="button"> Stories Ages 3-5 </button>
                </Link> 
                <br></br>
                <Link to="/stories/level2">  
                <button className="button"> Stories Ages 5-6 </button>
                </Link> 
                <br></br>
                <Link to="/stories/level3">  
                <button className="button"> Stories Ages 6-7 </button>
                </Link> 
            </div>
            <div className="Browseby">
                <h2>Browse By Style </h2>
                <br></br>
                <Link to="/stories/adventure"> 
                <button className="button"> Adventures </button>
                </Link> 
                <br></br>
                <Link to="/stories/adventure"> 
                <button className="button"> Spaces </button>
                </Link> 
            </div>
            </div>
        </div>
    )
}
export default HomePage