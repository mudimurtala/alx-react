import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppContext } from './AppContext';
import App from './App';

test('logIn function updates state correctly', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const emailInput = getByPlaceholderText(/email/i);
    const passwordInput = getByPlaceholderText(/password/i);
    const submitButton = getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(getByText(/welcome test@example.com/i)).toBeInTheDocument();
});

test('logOut function resets state correctly', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<App />);
    const emailInput = getByPlaceholderText(/email/i);
    const passwordInput = getByPlaceholderText(/password/i);
    const submitButton = getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(getByText(/welcome test@example.com/i)).toBeInTheDocument();

    const logoutButton = getByText(/logout/i);
    fireEvent.click(logoutButton);
    expect(queryByText(/welcome test@example.com/i)).toBeNull();
});
