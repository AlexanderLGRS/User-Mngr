import React from 'react';
import './UsersTable.css';

export default function UsersTable(props) {
    const sortHandler = (event) => {
        props.onSortHandler(event.target.id)
    };
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th
                            id='name'
                            className='headerColumn nameColumn'
                            onClick={sortHandler}
                        >
                            Name
                        </th>
                        <th
                            id='creationDate'
                            className='headerColumn creation-dateColumn'
                            onClick={sortHandler}
                        >
                            Creation date
                        </th>
                        <th
                            id='country'
                            className='headerColumn countryColumn'
                            onClick={sortHandler}
                        >
                            Country
                        </th>
                        <th
                            id='role'
                            className='headerColumn roleColumn'
                            onClick={sortHandler}
                        >
                            Role
                        </th>
                        <th
                            id='email'
                            className='headerColumn emailColumn'
                            onClick={sortHandler}
                        >
                            Email
                        </th>
                        <th
                            id='lastActive'
                            className='headerColumn last-activeColumn'
                            onClick={sortHandler}
                        >
                            Last active
                        </th>
                        <th className='deleteColumn'></th>
                    </tr>
                </thead>
                <tbody>{props.children}</tbody>
            </table>
        </React.Fragment>
    );
}
