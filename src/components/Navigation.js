import React from 'react';
import {Link} from 'react-router-dom';


function Navigation(){
    return (
        <nav className ="App-nav">
            <Link to ="/homepage">Home</Link>
            <p></p>
            <Link to ="/shop">Review previous games</Link>
            <p></p>
            <Link to ="/register">Play new trivia game</Link>
            <p></p>
            <Link to ="/tutorial">Tutorial</Link>
        </nav>
    );
}

export default Navigation;