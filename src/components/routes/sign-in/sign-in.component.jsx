import { signInWithGoogle, creatUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGoogle();
        const userDocRef = await creatUserDocumentFromAuth(user);
        console.log(user);
    };
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}
export default SignIn;