import React, { useState } from 'react';
import { AppContext } from './AppContext'; // Adjust the import path if necessary
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

const App = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        isLoggedIn: false,
    });

    const [listNotifications, setListNotifications] = useState([]);

    const markNotificationAsRead = (id) => {
        setListNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
    };

    // Example of how to log in (you can expand this logic)
    const logIn = (email, password) => {
        setUser({ email, password, isLoggedIn: true });
    };

    return (
        <AppContext.Provider value={{ user, logOut: () => setUser({ ...user, isLoggedIn: false }) }}>
            <div>
                {/* Render your components like Header, Footer, Notifications etc. */}
                <Footer />
                <Notifications listNotifications={listNotifications} markNotificationAsRead={markNotificationAsRead} />
            </div>
        </AppContext.Provider>
    );
};

export default App;
