import { fireEvent, render, screen } from '@testing-library/react';
import UserCard from './UserCard';
test('Renders component', () => {
    const closeHandler = jest.fn();
    render(
        <UserCard
            onCloseHandler={closeHandler}
            name='Alexander'
            creationDate='1998-12-07'
            country='Colombia'
            role='Fronten Developer'
            email='alexlansdorprs@gmail.com'
            lastActive='21:50'
        />
    );
    const cardName = screen.getByText('Alexander');
    const button = screen.getByText('ⓧ');
    fireEvent.click(button);
    expect(closeHandler).toBeCalled();
    expect(cardName).toBeInTheDocument();
});
