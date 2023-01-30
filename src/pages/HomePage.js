import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function HomePage(){
    return(
        <>
            <div className = 'App-home'>
            <h2>Welcome to Trivia!</h2>
            <p>New! Pie Chart Data for previous games!</p>
            <PieChart
                //label={(props) => { return props.dataEntry.title;}}
                data={[
                    { title: 'History', value: 10, color: '#EC8F41' },
                    { title: 'Geography', value: 15, color: '#1D3DCB' },
                    { title: 'Science', value: 20, color: '#41C234' },
                ]}
            />
            </div>
        </>
    )

}


export default HomePage;