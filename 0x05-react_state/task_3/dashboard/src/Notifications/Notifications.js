import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ listNotifications, markNotificationAsRead }) => {
    return (
        <div>
            {listNotifications.map((notification) => (
                <div key={notification.id}>
                    <p>{notification.message}</p>
                    <button onClick={() => markNotificationAsRead(notification.id)}>Mark as read</button>
                </div>
            ))}
        </div>
    );
};

Notifications.propTypes = {
    listNotifications: PropTypes.array.isRequired,
    markNotificationAsRead: PropTypes.func.isRequired,
};

export default Notifications;
