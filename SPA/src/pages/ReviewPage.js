import React from 'react'
// import { Link, Navigate } from 'react-router-dom';
import ReviewTable from '../components/ReviewTable';
import { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';


function ReviewPage(){
    const [questions, setQuestions] = useState([]);
    // const navigate = useNavigate();
    
    const loadQuestions = async () => {
        const response = await fetch('/questions');
        const data = await response.json();
        setQuestions(data);
    }

    //first parameter of useEffect cannot be an async function 

    useEffect(() => {
        loadQuestions();
    }, []);

    return(
        <>
            <h2>Review Previous Games</h2>
            <p>Example questions from 'https://www.watercoolertrivia.com/trivia-questions/biology-trivia-questions'</p>
            <ReviewTable questions={questions}></ReviewTable>
        </>
    )

}


export default ReviewPage;