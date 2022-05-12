import { fireEvent, render, screen } from '@testing-library/react';
import CustomForm from './CustomForm';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
test('Renders component', () => {
    const submitHandler = jest.fn()
    const clickHandler = jest.fn()
    render(
        <CustomForm title='Login Form' formName='loginForm' onSubmit={submitHandler}>
                    <CustomInput
                        label='Insert your email'
                        id='email'
                        type='email'
                        placeHolder='name@mail.com'
                    />
                    <CustomInput
                        label='Insert your password'
                        id='password'
                        type='password'
                        placeHolder='*****'
                    />
                    <CustomButton
                        text='Log In'
                        type='submit'
                        clickHandler={clickHandler}
                    />
                </CustomForm>
    );
    const form = screen.getByText('Login Form');
    const button = screen.getByText('Log In');
    fireEvent.click(button)
    expect(submitHandler).toBeCalled()
    expect(form).toBeInTheDocument();
});
