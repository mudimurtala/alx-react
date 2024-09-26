import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
    it('should verify that default state for displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('should verify that calling handleDisplayDrawer updates state to true', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('should verify that calling handleHideDrawer updates state to false', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ displayDrawer: true });
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });
});


import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import based on your file structure

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/some text/i); // Change 'some text' to actual text expected in your App component
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App'; // Make sure this path is correct

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
