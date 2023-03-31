import React from 'react'
import NavBar from './NavBar';
import {Link} from 'react-router-dom'


const HomePage =()=>{
    return(
            <div className="Homepage">
                 <NavBar/>
                <div className="section">
            <div className="BrbyAge">
                <h1>Browse By Age </h1>
                <br></br>
                <Link to="/stories/age-3-5">  
                <button> Stories for kids Ages 3-5 </button>
                </Link> 
                <br></br>
                <Link to="/stories/age-3-5">  
                <button> Stories for kids Ages 5-8 </button>
                </Link> 
                <br></br>
                <Link to="/stories/age-3-5">  
                <button> Stories for kids Ages 8-10 </button>
                </Link> 
            </div>
            <div className="BrbyAge">
                <h1>Browse By Style </h1>
                <br></br>
                <button> Adventures</button>
                <br></br>
                <button> Spaces </button>
            </div>
            </div>
        </div>
    )
}
export default HomePage