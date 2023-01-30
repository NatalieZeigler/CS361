import React from 'react'
import OrderTable from '../components/OrderTable'
import items from '../data/items'


function OrderPage(){
    return(
        <>
            <h2>Review Previous Games</h2>
            <table>
                <OrderTable items={items}></OrderTable>
            </table>
        </>
    )

}


export default OrderPage;