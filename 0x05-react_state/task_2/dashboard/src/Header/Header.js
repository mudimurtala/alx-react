import React, { Component } from 'react';
import { AppContext } from '../App/AppContext';

class Header extends Component {
    static contextType = AppContext;

    render() {
        const { user, logOut } = this.context;

        return (
            <header>
                <h1>My App</h1>
                {user.isLoggedIn && (
                    <div id="logoutSection">
                        <span>Welcome {user.email}</span>
                        <button onClick={logOut}>Logout</button>
                    </div>
                )}
            </header>
        );
    }
}

export default Header;
