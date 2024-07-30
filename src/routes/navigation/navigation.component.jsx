import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart-dropdown.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
    NavigationContainer,
    LogoContainer,
    NavigationLinksContainer,
    NavigationLink
} from "./navigation.styles";

const Navigation = () => {  
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer aria-label="Site Navigation">
                <LogoContainer className="logo-container" to="/">
                    <Logo className="logo" />   
                </LogoContainer>
                <NavigationLinksContainer>
                    <li>
                        <NavigationLink to="/">Home</NavigationLink>
                    </li>
                    <li>
                        {
                            currentUser ? 
                            (<NavigationLink to="/auth" onClick={signOutUser}>Sign Out</NavigationLink>) :
                            (<NavigationLink to="/auth">Sign In</NavigationLink>)
                        }
                    </li>
                    <li>
                        <NavigationLink to="/shop">
                            Shop
                        </NavigationLink>
                    </li>
                    <li>
                        <CartIcon />
                        {isCartOpen && <CartDropdown />}
                    </li>
                </NavigationLinksContainer>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
  };
export default Navigation;