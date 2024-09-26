import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('submit button is disabled by default', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeDisabled();
});

test('submit button is enabled when both inputs are filled', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(button).toBeEnabled();
});
