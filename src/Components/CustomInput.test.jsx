import { render, screen } from '@testing-library/react';
import CustomInput from './CustomInput';
test('Renders component', () => {
    const setEmailHandler = jest.fn()
    render(
        <CustomInput
            label='Insert your email'
            id='email'
            type='email'
            placeHolder='name@mail.com'
            value=''
            onChange={setEmailHandler}
        />
    );
    const input = screen.getByText('Insert your email');
    expect(setEmailHandler).not.toBeCalled()    
    expect(input).toBeInTheDocument();
});
