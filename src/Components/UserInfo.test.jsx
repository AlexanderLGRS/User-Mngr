import { fireEvent, render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';
test('Renders component', () => {
    const showUserDetails = jest.fn();
    const onDeleteHandler = jest.fn();
    render(
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
    );
    const userName = screen.getByText('Alexander');
    const userCreationDate = screen.getByText('1998-12-07');
    const userCountry = screen.getByText('Colombia');
    const userRole = screen.getByText('Fronten Developer');
    const userEmail = screen.getByText('alexlansdorprs@gmail.com');
    const userLastActive = screen.getByText('21:50');
    const deleteButton = screen.getByText('Delete');

    expect(userName).toBeInTheDocument();
    expect(userCreationDate).toBeInTheDocument();
    expect(userCountry).toBeInTheDocument();
    expect(userRole).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(userLastActive).toBeInTheDocument();

    fireEvent.click(userName);
    expect(showUserDetails).toBeCalled();
    fireEvent.click(deleteButton);
    expect(onDeleteHandler).toBeCalled();
});
