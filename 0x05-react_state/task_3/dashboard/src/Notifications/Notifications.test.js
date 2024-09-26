import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
    it('should display notifications', () => {
        const notifications = [{ id: 1, message: 'Test Notification' }];
        const markNotificationAsRead = jest.fn();

        const { getByText } = render(
            <Notifications listNotifications={notifications} markNotificationAsRead={markNotificationAsRead} />
        );

        expect(getByText(/Test Notification/i)).toBeInTheDocument();
    });
});
