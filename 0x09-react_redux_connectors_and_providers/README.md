# React Redux Connectors and Providers

## Description
This project focuses on implementing and working with **React** and **Redux**, specifically connectors and providers. The goal is to connect React components to the Redux store, map actions and state to props, and manage the application state using Redux.

### Key Concepts:
- **Redux Connectors**: Mapping state and actions from the Redux store to the props of React components.
- **Redux Provider**: Wrapping the app with the provider to make the Redux store available throughout the component tree.
- **Redux Middleware and Thunk**: For handling asynchronous actions.
- **Redux Reselect**: Improving performance with memoized selectors.
- **Redux DevTools**: Debugging Redux applications.

## Learning Objectives
By the end of this project, you should be able to:
1. Explain Redux connectors and how to use them.
2. Implement `mapStateToProps` and `mapDispatchToProps`.
3. Map an action creator and an async action creator to a component.
4. Set up a Redux store with the Provider and connect it to your app.
5. Use Redux Reselect to improve performance.
6. Debug your Redux app with Redux DevTools.

## Project Structure
- **`dashboard`**: Contains the main dashboard and supporting files.
  - **`dist`**: Holds static files like `courses.json`, `login-success.json`, and `notifications.json`.
  - **`src`**: Contains source code including `App.js`, `index.js`, and Redux-related files.
  - **`App`**: Main app component folder.

## Provided Files
- `dashboard/dist/courses.json`: List of courses with credits.
- `dashboard/dist/login-success.json`: User login data (name, email, profile picture).
- `dashboard/dist/notifications.json`: Notifications with author details and message context.

## Requirements
- Allowed editors: **vi**, **vim**, **emacs**, **Visual Studio Code**.
- Files will be interpreted on **Ubuntu 18.04 LTS** using **Node 12.x.x** and **npm 6.x.x**.
- All files must end with a new line.
- `README.md` at the root of the project is mandatory.
- Push all files including `package.json` and `.babelrc`.
- All functions must be exported.

## Project Setup
### Installation
1. Clone the repository.
    ```bash
    git clone https://github.com/mudimurtala/alx-react
    cd 0x09-react_redux_connectors_and_providers
    ```
2. Install dependencies.
    ```bash
    npm install
    ```

### Running the Project
1. To run the project:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Tasks

### Task 0: Write `mapStateToProps`
- In `App.js`, create a `mapStateToProps` function to connect the `uiReducer` and `isLoggedIn` property.
- Connect this function to the component using `connect`.

### Task 1: Create a Small Store
- In `index.js`, create a store using `createStore` from Redux, passing in the `uiReducer`.
- Wrap the main app with the `Provider` to make the store accessible.

### Task 2: Test `mapStateToProps`
- Export `mapStateToProps` and write a test suite for it in `App.test.js`.
- Verify the function returns the correct object when passed different states.

### Task 3: Update `mapStateToProps`
- Modify `mapStateToProps` to also pass `displayDrawer` from the state.
- Update the render function to use `displayDrawer` from props.

## Resources
- [Redux CreateStore](https://redux.js.org/api/createstore)
- [Redux Connect](https://react-redux.js.org/api/connect)
- [Redux Provider](https://react-redux.js.org/api/provider)
- [Redux Middleware](https://redux.js.org/advanced/middleware)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [Redux Reselect](https://github.com/reduxjs/reselect)

## Author
Mudi Murtala
