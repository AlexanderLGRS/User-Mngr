import React from 'react';
import './UsersTable.css';

export default function UsersTable(props) {
    const {} = props;
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th className='nameColumn'>
                            Name{' '}
                            <button className='iconButton'>
                                <ion-icon name='caret-down'></ion-icon>
                            </button>
                        </th>
                        <th className='creation-dateColumn'>
                            Creation date{' '}
                            <button className='iconButton'>
                                <ion-icon name='caret-down'></ion-icon>
                            </button>
                        </th>
                        <th className='countryColumn'>
                            Country{' '}
                            <button className='iconButton'>
                                <ion-icon name='caret-down'></ion-icon>
                            </button>
                        </th>
                        <th className='roleColumn'>
                            Role{' '}
                            <button className='iconButton'>
                                <ion-icon name='caret-down'></ion-icon>
                            </button>
                        </th>
                        <th className='emailColumn'>
                            Email{' '}
                            <button className='iconButton'>
                                <ion-icon name='caret-down'></ion-icon>
                            </button>
                        </th>
                        <th className='last-activeColumn'>
                            Last active{' '}
                            <button className='iconButton'>
                                <ion-icon name='caret-down'></ion-icon>
                            </button>
                        </th>
                        <th className='deleteColumn'></th>
                    </tr>
                </thead>
                <tbody>{props.children}</tbody>
            </table>
        </React.Fragment>
    );
}
