import React from 'react';
import './CustomForm.css';

export default function CustomForm(props) {
    const { title, formName } = props;
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit();
    };
    return (
        <React.Fragment>
            <div className='formContainer'>
                <form className={formName} onSubmit={submitHandler}>
                    <h3 className='formTitle'>{title}</h3>
                    {props.children}
                </form>
            </div>
        </React.Fragment>
    );
}
