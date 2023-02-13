import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
function HomePage(){

    return(
        <>
            <div className = 'App-home'>
            <h2>Welcome to Trivia!</h2>
            <p>New! Pie Chart Data!</p>
            <p>Data coming soon</p>
            <ul className = 'Legend'>
                <li className = 'Legend-h'>
                    <span>History</span>
                </li>
                <li className = 'Legend-g'>
                    <span>Geography</span>
                </li>
                <li className = 'Legend-s'>
                    <span>Science and Nature</span>
                </li>
                <li className = 'Legend-a'>
                    <span>Arts and Literature</span>
                </li>
                <li className = 'Legend-sp'>
                    <span>Sports and Leisure</span>
                </li>
                <li className = 'Legend-e'>
                    <span>Entertainment</span>
                </li>
            </ul>
            <PieChart className ="Piechart"
                data={[
                    { title: 'History', value: 10, color: '#FFFF00' },
                    { title: 'Geography', value: 15, color: '#1D3DCB' },
                    { title: 'Science and Nature', value: 20, color: '#41C234' },
                    { title: 'Art and Literature', value: 20, color: '#FF0000'}, 
                    { title: 'Sports and Leisure', value: 10, color: '#FFA500'}, 
                    { title: "Entertainment", value: 10, color: '#c62297'}
                ]}
            />
            </div>
        </>
    )

}


export default HomePage;


