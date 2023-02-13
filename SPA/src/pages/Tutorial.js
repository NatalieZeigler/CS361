import React from 'react'


function Tutorial (){
    return(
        <>
            <div className = 'App-tut'>
            <h2>Welcome to Trivia!</h2>
            <ul>
                <li>
                   Select "Play new trivia game"
                </li>
                <p></p>
                <li>You will then be prompted to either pick a category
                    or select Shuffle
                </li>
                <p></p>
                <li>Type in your answer and click Submit</li>
                <p></p>
                <li>The program will then indicate if you got the answer right or not</li>
                <p></p>
                <li>You will then move onto the next question</li>
                <p></p>
                <li>There are 10 questions per game</li>
            </ul>
            </div>
        </>
    )

}


export default Tutorial;