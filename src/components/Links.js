import React from 'react';
import NavBar from './NavBar';

const Links =()=>{

    return(
        <div>
            <NavBar/>
            <h1>Alphabet Songs</h1>
            <div className="LinksSongs">
            <a className='Links' href="https://www.youtube.com/embed/SWvBAQf7v8g"> Usher's Hip Hop Song </a>
            <br></br>
            <a className='Links' href="https://www.youtube.com/watch?v=O0Bb5T2-b1A&t=34s"> Yoga Aplhabet By Bary Koral</a>
            <br></br>
            <a className='Links' href="https://www.youtube.com/watch?v=KcuZzaqhB9Q" > ABC Dance</a>
            </div>
            </div>
      
    )
}

export default Links