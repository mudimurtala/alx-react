import React from 'react';
import Notifications from '../Notifications/Notifications';
import './App.css'; // You can create this file for styles if needed

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
        };
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
    }

    handleDisplayDrawer() {
        this.setState({ displayDrawer: true });
    }

    handleHideDrawer() {
        this.setState({ displayDrawer: false });
    }

    render() {
        return (
            <div>
                <header>
                    <h1>My Application</h1>
                </header>
                <Notifications
                    displayDrawer={this.state.displayDrawer}
                    handleDisplayDrawer={this.handleDisplayDrawer}
                    handleHideDrawer={this.handleHideDrawer}
                />
            </div>
        );
    }
}

export default App;
