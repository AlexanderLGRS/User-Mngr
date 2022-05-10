import React from 'react';
import CustomButton from '../Components/CustomButton';
import CustomForm from '../Components/CustomForm';
import CustomInput from '../Components/CustomInput';
import './Login.css'

export default function Login(props) {
    const {} = props;
    return (
        <React.Fragment>
            <div className="login">
            <CustomForm>
                <CustomInput label='Insert your email' id='email' type='email' placeHolder='name@mail.com' />
                <CustomInput label='Insert your password' id='password' type='password' placeHolder='*****' />
                <CustomButton text='Log In' type='submit' />
            </CustomForm>
            </div>
        </React.Fragment>
    );
}
