import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart-dropdown.context";

const Navigation = () => {  
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
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
                    <li>
                        <Link className="" to="/shop">
                            <CartIcon />
                            {isCartOpen && <CartDropdown />}
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    );
  };
export default Navigation;