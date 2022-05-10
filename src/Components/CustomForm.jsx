import React from 'react';
import './CustomForm.css';

export default function CustomForm(props) {
    const {} = props;
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit()
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
