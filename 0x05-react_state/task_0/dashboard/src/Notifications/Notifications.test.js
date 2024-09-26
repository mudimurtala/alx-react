import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
    it('should verify that clicking on the menu item calls handleDisplayDrawer', () => {
        const handleDisplayDrawer = jest.fn();
        const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
        wrapper.find('button').at(0).simulate('click');
        expect(handleDisplayDrawer).toHaveBeenCalled();
    });

    it('should verify that clicking on the close button calls handleHideDrawer', () => {
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications handleHideDrawer={handleHideDrawer} displayDrawer />);
        wrapper.find('button').at(1).simulate('click');
        expect(handleHideDrawer).toHaveBeenCalled();
    });
});


import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import based on your file structure

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/some text/i); // Change 'some text' to actual text expected in your App component
  expect(linkElement).toBeInTheDocument();
});
