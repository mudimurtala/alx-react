import React, { useState } from 'react';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        setIsLoggedIn(true);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        checkEnableSubmit(event.target.value, password);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        checkEnableSubmit(email, event.target.value);
    };

    const checkEnableSubmit = (email, password) => {
        setEnableSubmit(email.trim() !== '' && password.trim() !== '');
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <input
                type="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={handleChangePassword}
                placeholder="Password"
                required
            />
            <input
                type="submit"
                value="Login"
                disabled={!enableSubmit}
            />
        </form>
    );
};

export default Login;
