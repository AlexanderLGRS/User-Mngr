import React, { useState } from 'react';
import './Layout.css';
import logo from '../Assets/ntt-data-logo.svg';
import CustomButton from './CustomButton';

export default function Layout(props) {
    const [isLogged, setIsLogged] = useState(false);
    const loginHandler = () => {
        
    };
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <a className='navbar-brand' href='#'>
                        <img
                            className='navbar-logo'
                            src={logo}
                            alt='NTTDATA-logo'
                        />
                    </a>
                    {!isLogged && (
                        <CustomButton
                            text='Login'
                            type='button'
                            onClick={loginHandler}
                        />
                    )}
                </div>
            </nav>
            {props.children}
            <footer className='navbar footer navbar-dark bg-dark'>
                <div className='container'>
                    <a className='footer-brand' href='#'></a>
                </div>
            </footer>
        </React.Fragment>
    );
}
