import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDisplayDrawer}>
                    Your notifications
                </button>
                {this.props.displayDrawer && (
                    <div className="Notifications">
                        <button onClick={this.props.handleHideDrawer}>Close</button>
                        {/* Your notifications content can go here */}
                    </div>
                )}
            </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
};

export default Notifications;
