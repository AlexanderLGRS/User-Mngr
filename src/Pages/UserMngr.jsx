import React, { useEffect, useState } from 'react';
import UserInfo from '../Components/UserInfo';
import UsersTable from '../Components/UsersTable';
import './UserMngr.css';
import users from '../usersData.json';
import Swal from 'sweetalert2';
import CustomForm from '../Components/CustomForm';

export default function UserMngr(props) {
    const [usersList, setUsersList] = useState(users);
    const [usersListChange, setUsersListChange] = useState(false);
    let countries = [
        'United Kingdom',
        'United States',
        'Argentina',
        'Brazil',
        'China',
        'Russia',
    ];
    const filterHandler = (event) => {
        const filteredUsers = users.filter(user => user.country === event.target.value);
        setUsersList(filteredUsers)

    };

    const sortHandler = (category) => {
        usersList.sort(function (a, b) {
            if (a[category] > b[category]) {
                return 1;
            }
            if (a[category] < b[category]) {
                return -1;
            }
            return 0;
        });
        setUsersListChange(true);
    };

    const onDeleteHandler = (value) => {
        Swal.fire({
            title: 'Warning',
            text: 'Are you sure you want to remove this user?',
            icon: 'warning',
            confirmButtonText: 'Delete',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    for (var i = 0; i < users.length; i++) {
                        if (users[i].id === value) {
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
                <h1 className='sectionTitle'>Manage your Users</h1>
                <CustomForm formName='countryForm' title='Choose a country'>
                    <select name='transporte'>
                        {countries.map((country) => (
                            <option
                                onClick={filterHandler}
                                key={Math.random()}
                                value={country}
                            >
                                {country}
                            </option>
                        ))}
                    </select>
                </CustomForm>
                {userLoginState && (
                    <UsersTable onSortHandler={sortHandler}>
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
