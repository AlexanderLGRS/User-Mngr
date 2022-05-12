import React, { useEffect, useState } from 'react';
import UserInfo from '../Components/UserInfo';
import UsersTable from '../Components/UsersTable';
import './UserMngr.css';
import users from '../usersData.json';
import Swal from 'sweetalert2';
import CustomForm from '../Components/CustomForm';
import { Link } from 'react-router-dom';
import CustomButton from '../Components/CustomButton';
import UserCard from '../Components/UserCard';

export default function UserMngr(props) {
    const clickHandler = () => {};

    const [usersList, setUsersList] = useState(users);
    const [usersListChange, setUsersListChange] = useState(false);
    const [userDetailsToShow, setUserDetailsToShow] = useState(false);
    const [userToShow, setUserToShow] = useState('');
    const { userLoginState } = props;

    let countries = [
        'United Kingdom',
        'United States',
        'Argentina',
        'Brazil',
        'China',
        'Russia',
    ];

    const filterHandler = (event) => {
        const filteredUsers = users.filter(
            (user) => user.country === event.target.value
        );
        setUsersList(filteredUsers);
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

    const showUserDetails = (id) => {
        setUserDetailsToShow(true);

        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                setUserToShow();
                setUserToShow(users[i]);
            }
        }
    };
    const closeHandler = () => {
        setUserDetailsToShow(false);
    };

    return (
        <React.Fragment>
            {userLoginState && (
                <div className='usersContainer'>
                    <h1 className='sectionTitle'>Manage your Users</h1>
                    <CustomForm
                        formName='countryForm'
                        title='Filter by country'
                    >
                        <select className='countrySelector'>
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
                    <UsersTable onSortHandler={sortHandler}>
                        {usersList.map((user) => (
                            <UserInfo
                                onUserDetailsHandler={showUserDetails}
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
                </div>
            )}
            {!userLoginState && (
                <section
                    className='masthead'
                    role='img'
                    aria-label='Image Description'
                >
                    <h1>NTT Data - User Manager</h1>
                    <Link to='/login'>
                        <CustomButton
                            text='Login'
                            type='button'
                            clickHandler={clickHandler}
                        />
                    </Link>
                </section>
            )}
            {userDetailsToShow && (
                <UserCard
                    onCloseHandler={closeHandler}
                    name={userToShow.name}
                    creationDate={userToShow.creationDate}
                    country={userToShow.country}
                    role={userToShow.role}
                    email={userToShow.email}
                    lastActive={userToShow.lastActive}
                />
            )}
        </React.Fragment>
    );
}
