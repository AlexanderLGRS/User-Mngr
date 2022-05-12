import { fireEvent, render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';
import UsersTable from './UsersTable';
test('Renders component', () => {
    const showUserDetails = jest.fn();
    const onDeleteHandler = jest.fn();
    const sortHandler = jest.fn();
    render(
        <UsersTable onSortHandler={sortHandler}>
                <UserInfo
                    onUserDetailsHandler={showUserDetails}
                    key='1'
                    id='1'
                    name='Alexander'
                    creationDate='1998-12-07'
                    country='Colombia'
                    role='Fronten Developer'
                    email='alexlansdorprs@gmail.com'
                    lastActive='21:50'
                    onDelete={onDeleteHandler}
                />
        </UsersTable>
    );
    const tableColumnName = screen.getByText('Name');
    const tableColumnCreationDate = screen.getByText('Creation date');
    const tableColumnCountry = screen.getByText('Country');
    const tableColumnRole = screen.getByText('Role');
    const tableColumnEmail = screen.getByText('Email');
    const tableColumnLastActive = screen.getByText('Last active');

    expect(tableColumnName).toBeInTheDocument();
    expect(tableColumnCreationDate).toBeInTheDocument();
    expect(tableColumnCountry).toBeInTheDocument();
    expect(tableColumnRole).toBeInTheDocument();
    expect(tableColumnEmail).toBeInTheDocument();
    expect(tableColumnLastActive).toBeInTheDocument();

    fireEvent.click(tableColumnName);
    fireEvent.click(tableColumnCreationDate);
    fireEvent.click(tableColumnCountry);
    fireEvent.click(tableColumnRole);
    fireEvent.click(tableColumnEmail);
    fireEvent.click(tableColumnLastActive);
    expect(sortHandler).toHaveBeenCalledTimes(6);
});
