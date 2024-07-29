import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { Fragment } from "react";
import {
    AuthenticationContainer
} from './authentication.styles';

const Authentication = () => {
    return (
        <Fragment>
            <AuthenticationContainer>
                <SignInForm />
                <SignUpForm />
            </AuthenticationContainer>
        </Fragment>
    )
}
export default Authentication;