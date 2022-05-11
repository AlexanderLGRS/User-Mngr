import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Components/CustomButton';
import './Home.css';

export default function Home(props) {
    const {userLoginState}= props
    return (
        <React.Fragment>
            <section className='masthead' role='img' aria-label='Image Description'>
                <h1>NTT Data - User Manager</h1>
                {userLoginState && (
                    <Link to='/user-manager'>
                        <CustomButton text='User-Mngr' type='button' />
                    </Link>
                )}
                {!userLoginState && (
                    <Link to='/login'>
                        <CustomButton text='Login' type='button' />
                    </Link>
                )}
            </section>
        </React.Fragment>
    );
}
