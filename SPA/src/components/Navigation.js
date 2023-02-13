import React from 'react';
import {Link} from 'react-router-dom';


function Navigation(){
    return (
        <div className ="App-nav">
            <ul className = 'App-tut-list'>
            <Link to ="/homepage">
                <li>Home</li>
            </Link>
        
            <Link to ="/questions">
                <li>Review previous games</li>
            </Link>
            
            <Link to ="/register">
                <li>Play new trivia game</li>
            </Link>

            <Link to ="/tutorial">
                <li>Tutorial</li>
            </Link>
            
            <Link to ="/category">
                <li>Categories</li>
            </Link>
            
            </ul>
        </div>
    );
}

export default Navigation;

