import React from 'react';
import OrderRow from './OrderRow';
import '../App.css';

function OrderTable({ items }) {
    return (
        <div className = 'App-table'>
                <tr className='App-table-head'>
                    <th className='App-table-head'>Date</th>
                    <th className='App-table-head'>Score</th>
                    <th className='App-table-head'>Review</th>
                </tr>
                {items.map((item, i) => <OrderRow item={item} key={i} />)}
        </div>
    );
}

export default OrderTable;