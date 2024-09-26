import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext'; // Adjust the import path if necessary

const Footer = () => {
    const { user } = useContext(AppContext); // Use the context

    return (
        <footer>
            {user.isLoggedIn && <p><a href="/contact">Contact us</a></p>}
        </footer>
    );
};

export default Footer;
