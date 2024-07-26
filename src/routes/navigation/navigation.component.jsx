import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {  
    const { currentUser } = useContext(UserContext);
    return (
        <Fragment>
            <nav className="navigation" aria-label="Site Navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />   
                </Link>
                <ul className="navigation-links-container">
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        {
                            currentUser ? 
                            (<Link className="link" to="/auth" onClick={signOutUser}>Sign Out</Link>) :
                            (<Link className="link" to="/auth">Sign In</Link>)
                        }
                    </li>
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    );
  };
export default Navigation;