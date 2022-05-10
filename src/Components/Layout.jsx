import React, { useState } from 'react';
import './Layout.css';
import logo from '../Assets/ntt-data-logo.svg';

export default function Layout(props) {
    
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <a className='navbar-brand' href='/'>
                        <img
                            className='navbar-logo'
                            src={logo}
                            alt='NTTDATA-logo'
                        />
                    </a>
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
