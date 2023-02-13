import React from 'react';




function ReviewTableRow({question}) {

    if (question.viewed !== true){
        return        
    } else 
    return (
        <tr className='App-row'>
            <td className='App-row'>{question.questionText}</td>
            
            <td className='App-row'>{String(question.viewed)}</td>
        </tr>
    );
}

export default ReviewTableRow;