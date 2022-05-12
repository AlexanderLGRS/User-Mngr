import React from 'react';
import CustomButton from './CustomButton';
import './UserCard.css';

export default function UserCard(props) {
    const { name, creationDate, country, role, email, lastActive } = props;
    const closeHandler =()=>{
        props.onCloseHandler()
    }
    return (
        <React.Fragment>
            <div className='card'>
                <button
                    className='closeButton'
                    onClick={closeHandler}
                >
                    ⓧ
                </button>
                <span className='userDetail'>Name: </span>
                <span className='name'>{name}</span>
                <span className='userDetail'>Creation Date: </span>
                <span className='creationDate'>{creationDate}</span>
                <span className='userDetail'>Country: </span>
                <span className='country'>{country}</span>
                <span className='userDetail'>Role: </span>
                <span className='role'>{role}</span>
                <span className='userDetail'>Email: </span>
                <span className='email'>{email}</span>
                <span className='userDetail'>Last Active: </span>
                <span className='lastActive'>{lastActive}</span>
            </div>
        </React.Fragment>
    );
}
