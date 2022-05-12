import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

test('Renders component', () => {
    const clickHandler = jest.fn();
    render(
        <CustomButton
            type='submit'
            text='Click Me'
            clickHandler={clickHandler}
        />
    );
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
});
