import React, { useContext, useState } from 'react';
import { AppContext } from '../App/AppContext';

const Login = () => {
    const { logIn } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        logIn(email, password);
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;
