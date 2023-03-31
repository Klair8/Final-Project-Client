import React from 'react'
import NavBar from './NavBar';
import {Link} from 'react-router-dom'


const HomePage =()=>{
    return(
        <div>
            <h1>Homepage</h1>
            <NavBar/>
            <div className="BrbyAge">
                <h1>Browse By Age </h1>
                <Link to="/stories/age-3-5">  
                <button> Stories for kids Ages 3-5 </button>
                </Link> 
                <Link to="/stories/age-3-5">  
                <button> Stories for kids Ages 5-8 </button>
                </Link> 
                <Link to="/stories/age-3-5">  
                <button> Stories for kids Ages 8-10 </button>
                </Link> 
            </div>
            <div className="BrbyAge">
                <h1>Browse By Style </h1>
                <button> Adventures</button>
                <button> Spaces </button>
            </div>
        </div>
    )
}
export default HomePage