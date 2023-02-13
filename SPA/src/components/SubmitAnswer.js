// import React from 'react';
import '../App.css';
import React, { useState } from 'react';

function RegistrationInfo() {
    const [name, setAttribute] = useState('');
    //const [email, setEmail] = useState('');
    return (
        <form>
            <fieldset>
                <legend></legend>
                    <label>Your Answer:
                        <input type="text" value ={name}
                            onChange={e => setAttribute(e.target.value)} />
                    </label>
            </fieldset>
            <button onClick={e => {
                setAttribute(e.target.value);
                //setEmail(e.target.value);
                alert(`Are you sure you want to submit the answer: ${name}?`);
                e.preventDefault();
            }}>Submit</button>
        </form>
    );
}

export default RegistrationInfo;