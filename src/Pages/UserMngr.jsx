import React, { useEffect, useState } from 'react';
import UserInfo from '../Components/UserInfo';
import UsersTable from '../Components/UsersTable';
import './UserMngr.css';
import users from '../usersData.json';
import Swal from 'sweetalert2';

export default function UserMngr(props) {
    const [usersList, setUsersList] = useState(users);
    const [usersListChange, setUsersListChange] = useState(false);
    const onDeleteHandler = (value) => {
        Swal.fire({
            title: 'Warning',
            text: 'are you sure to delete this user?',
            icon: 'warning',
            confirmButtonText: 'Delete',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    for (var i = 0; i < users.length; i++) {
                        if (users[i].id == value) {
                            users.splice(i, 1);
                            setUsersListChange(true);
                        }
                    }
                } else if (result.isDenied) {
                    setUsersListChange(false);
                }
            })

            .then(() => {});
    };
    useEffect(() => {
        setUsersListChange(false);
        setUsersList(users);
    }, [usersListChange]);
    const { userLoginState } = props;
    return (
        <React.Fragment>
            <div className='usersContainer'>
                {userLoginState && (
                    <UsersTable>
                        {usersList.map((user) => (
                            <UserInfo
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                creationDate={user.creationDate}
                                country={user.country}
                                role={user.role}
                                email={user.email}
                                lastActive={user.lastActive}
                                onDelete={onDeleteHandler}
                            />
                        ))}
                    </UsersTable>
                )}
            </div>
        </React.Fragment>
    );
}
