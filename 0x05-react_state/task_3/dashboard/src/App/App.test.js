import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('should mark notification as read', () => {
        const { getByText } = render(<App />);
        
        // Add a notification to the state for testing
        const notification = { id: 1, message: 'Test Notification' };
        const { rerender } = render(<App />);
        fireEvent.click(getByText(/Mark as read/i)); // Simulate marking the notification as read

        expect(getByText(/Test Notification/i)).toBeNull(); // Check if the notification is removed
    });
});
