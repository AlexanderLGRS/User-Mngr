import React, { useState } from 'react';
import CustomButton from '../Components/CustomButton';
import CustomForm from '../Components/CustomForm';
import CustomInput from '../Components/CustomInput';
import './Login.css';
import Swal from 'sweetalert2';

export default function Login(props) {
    const {} = props;
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const setEmailHandler = (email) => {
        setEnteredEmail(email);
    };

    const setPasswordHandler = (password) => {
        setEnteredPassword(password);
    };
    const submitHandler = () => {
        if (
            enteredEmail === 'admin@nttdata.com' &&
            enteredPassword === 'AdminPassword'
        ) {
            sessionStorage.setItem('UserLoginState', true);
            document.location = '/user-manager';
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Incorrect email or password',
                icon: 'error',
                confirmButtonText: 'Retry',
            });
        }
    };
    return (
        <React.Fragment>
            <div className='login'>
                <CustomForm onSubmit={submitHandler}>
                    <CustomInput
                        label='Insert your email'
                        id='email'
                        type='email'
                        placeHolder='name@mail.com'
                        onChange={setEmailHandler}
                    />
                    <CustomInput
                        label='Insert your password'
                        id='password'
                        type='password'
                        placeHolder='*****'
                        onChange={setPasswordHandler}
                    />
                    <CustomButton text='Log In' type='submit' clickHandler={false}/>
                </CustomForm>
            </div>
        </React.Fragment>
    );
}
