import React from 'react'
import NavBar from './NavBar';
import {Link} from 'react-router-dom'


const HomePage =()=>{
    return(
            <div className="Homepage">
                 <NavBar/>
                <div className="section">
            <div className="Browseby">
                <h1>Browse By Age </h1>
                <br></br>
                <Link to="/stories/level1">  
                <button className="button-Homepage"> Stories Ages 3-5 </button>
                </Link> 
                <br></br>
                <Link to="/stories/level2">  
                <button className="button-Homepage"> Stories Ages 5-6 </button>
                </Link> 
                <br></br>
                <Link to="/stories/level3">  
                <button className="button-Homepage"> Stories Ages 6-7 </button>
                </Link> 
            </div>
            <div className="Browseby">
                <h1>Browse By Style </h1>
                <br></br>
                <Link to="/stories/adventure"> 
                <button className="button-Homepage"> Adventures </button>
                </Link> 
                <br></br>
                <Link to="/stories/adventure"> 
                <button className="button-Homepage"> Spaces </button>
                </Link> 
            </div>
            </div>
        </div>
    )
}
export default HomePage