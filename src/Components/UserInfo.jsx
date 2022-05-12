import React from 'react';
import './UserInfo.css';

export default function UserInfo(props) {
    const { id, name, creationDate, country, role, email, lastActive } = props;
    const userDetailsHandler=(event)=>{
        props.onUserDetailsHandler(event.target.id)
    }
    const deleteHandler = (event) => {
        props.onDelete(event.target.value);
    };
    return (
        <React.Fragment>
            <tr>
                <th className='nameColumn' id={id} onClick={userDetailsHandler}>{name}</th>
                <th className='creation-dateColumn'>{creationDate}</th>
                <th className='countryColumn'>{country}</th>
                <th className='roleColumn'>{role}</th>
                <th className='emailColumn'>{email}</th>
                <th className='last-activeColumn'>{lastActive}</th>
                <th className='deleteColumn'>
                    {
                        <button
                        value={id}
                            className='deleteButton'
                            onClick={deleteHandler}
                        >Delete</button>
                    }
                </th>
            </tr>
        </React.Fragment>
    );
}
