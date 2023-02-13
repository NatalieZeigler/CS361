import React from 'react'


function Category (){
    return(
        <>
            <div className = 'App-tut'>
            <h2>Here are the categories of questions available to choose from</h2>
            <ul className = 'App-cat'>
                <li>
                   History
                </li>
                <p></p>
                <li className = 'App-cat-g'>
                    Geography
                </li>
                <p></p>
                <li className = 'App-cat-a'>
                    Arts and Literature
                </li>
                <p></p>
                <li>
                    Science and Nature
                </li>
                <p></p>
                <li>
                    Sports and Leisure
                </li>
                <p></p>
                <li>
                    Entertainment
                </li>
            </ul>
            </div>
        </>
    )

}


export default Category;