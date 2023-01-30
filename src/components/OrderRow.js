import React from 'react';
import '../App.css';
// import SelectQuantity from './SelectQuantity';

function OrderRow({ item }) {
    return (
        <tr>
            <td className='App-row'>{item.date}</td>
            <td className='App-row'>{item.score}</td>
            <td className='App-row'> Click to Review </td>
        </tr>      
    );
}

export default OrderRow;