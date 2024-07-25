import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {  
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
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    );
  };
export default Navigation;