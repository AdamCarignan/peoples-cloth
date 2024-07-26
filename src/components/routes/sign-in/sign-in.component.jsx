import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    signInWithGoogle,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
    auth
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGoogle();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    };
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popo-up</button>
            <SignUpForm />
        </div>

    )
}
export default SignIn;