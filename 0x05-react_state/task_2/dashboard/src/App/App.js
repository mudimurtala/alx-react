import React, { useState } from 'react';
import { AppContext, defaultUser } from './AppContext';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'; // Make sure to create this component if it doesn’t exist.

const App = () => {
    const [user, setUser] = useState(defaultUser);

    const logIn = (email, password) => {
        setUser({ email, password, isLoggedIn: true });
    };

    const logOut = () => {
        setUser(defaultUser);
    };

    return (
        <AppContext.Provider value={{ user, logOut }}>
            <Header />
            {user.isLoggedIn ? <CourseList /> : <Login logIn={logIn} />}
        </AppContext.Provider>
    );
};

export default App;
