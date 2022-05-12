import { fireEvent, render, screen } from '@testing-library/react';
import Layout from './Layout';
test('Renders component', () => {
    render(<Layout userLoginState='true' />);

    const layout = screen.getByAltText('NTTDATA-logo');
    const logoutButton = screen.getByText('Logout');

    fireEvent.click(logoutButton);
    expect(layout).toBeInTheDocument();
});
