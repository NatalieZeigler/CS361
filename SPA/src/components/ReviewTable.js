import React from 'react';
import TableRow from './ReviewTableRow';
import '../App.css';

function ReviewTable({ questions }) {
    return (
        <table id = 'questions'>
            <thead>
                <tr className='App-table-head'>
                    <th className='App-table-head'>Question</th>
                    <th className='App-table-head'>Viewed</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((question, i) => <TableRow question={question} key={i} />)}
            </tbody>
        </table>
    );
}

export default ReviewTable;