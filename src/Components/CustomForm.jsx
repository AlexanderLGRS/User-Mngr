import React from 'react';
import './CustomForm.css';

export default function CustomForm(props) {
    const {} = props;
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('tes');
    };
    return (
        <React.Fragment>
            <div className='formContainer'>
                <form className='customForm' onSubmit={submitHandler}>
                    {props.children}
                </form>
            </div>
        </React.Fragment>
    );
}
