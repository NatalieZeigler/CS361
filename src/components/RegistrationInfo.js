// import React from 'react';
import '../App.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function RegistrationInfo() {
    const [name, setAttribute] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    return (
        <form>
            <fieldset>
                <legend></legend>
                    <label>Your Name:
                        <input type="text" value ={name}
                            onChange={e => setAttribute(e.target.value)} />
                    </label>
                    <label>Your Email:
                        <input type="text" value ={email}
                            onChange={e => setEmail(e.target.value)} />
                    </label>
            </fieldset>
            <button onClick={e => {
                setAttribute(e.target.value);
                setEmail(e.target.value);
                alert(`Hi ${name}! Thank you for registering with ${email}`);
                navigate('/homepage')
            }}>Submit</button>
        </form>
    );
}

export default RegistrationInfo;