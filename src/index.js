import React from 'react';
import ReactDOM from 'react-dom';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Main App component
const App = () => {
    return <h1>Hello Max!</h1>;
};

// We render our app
ReactDOM.render(<App />, document.getElementById('app'));
