import React from 'react';
import { render } from '@testing-library/react';
import { AppContext } from '../App/AppContext';
import Header from './Header';

test('logoutSection is not created with default context value', () => {
    const { queryByText } = render(
        <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
            <Header />
        </AppContext.Provider>
    );
    expect(queryByText(/logout/i)).toBeNull();
});

test('logoutSection is created with user defined context value', () => {
    const { getByText } = render(
        <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' } }}>
            <Header />
        </AppContext.Provider>
    );
    expect(getByText(/welcome test@example.com/i)).toBeInTheDocument();
});
