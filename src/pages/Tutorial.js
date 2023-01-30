import React from 'react'


function Tutorial (){
    return(
        <>
            <div className = 'App-tut'>
            <h2>Welcome to Trivia!</h2>
            <ul>
                <li>
                   <p>Select <b>"Play new trivia game"</b></p> 
                </li>
                <li>You will then be prompted to either pick a category
                    or select Shuffle
                </li>
                <li>Type in your answer and click Submit</li>
                <li>The program will then indicate if you got the answer right or not</li>
                <li>You will then move onto the next question</li>
                <li>There are 10 questions per game</li>
            </ul>
            </div>
        </>
    )

}


export default Tutorial;