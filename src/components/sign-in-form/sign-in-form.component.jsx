import Button, {BUTTON_TYPE_CLASSES}  from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import { ButtonContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    alert('invalid email');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;

                case 'auth/invalid-credential':
                    alert('Incorrect credentials');
                    break;
                case 'auth/too-many-requests':
                    alert('Too many requests, try again later.');
                    break;
                default:
                    console.log(error);

            }
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign in with email and password</p>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <FormInput
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}
                />
                <ButtonContainer>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>Sign in with Google</Button>
                </ButtonContainer>
            </form>
        </div>
    );
}
export default SignInForm;