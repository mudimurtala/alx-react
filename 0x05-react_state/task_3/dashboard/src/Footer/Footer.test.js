import React from 'react';
import { render } from '@testing-library/react';
import { AppContext } from '../App/AppContext'; // Adjust the import path if necessary
import Footer from './Footer';

describe('Footer component', () => {
    it('should not display Contact us when user is logged out', () => {
        const user = { isLoggedIn: false };
        const { queryByText } = render(
            <AppContext.Provider value={{ user }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(queryByText(/Contact us/i)).toBeNull();
    });

    it('should display Contact us when user is logged in', () => {
        const user = { isLoggedIn: true };
        const { getByText } = render(
            <AppContext.Provider value={{ user }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(getByText(/Contact us/i)).toBeInTheDocument();
    });
});
