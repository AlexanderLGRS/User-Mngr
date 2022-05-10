import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Components/CustomButton';
import './Home.css';

export default function Home(props) {
    return (
        <React.Fragment>
            <section class='masthead' role='img' aria-label='Image Description'>
                <h1>Welcome to NTT Data - User Manager</h1>
                <Link to='/login'>
                <CustomButton text='Login' type='button' />
                </Link>
            </section>
        </React.Fragment>
    );
}
