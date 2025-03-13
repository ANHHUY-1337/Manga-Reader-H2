import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';// icon
import Provider from './state/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Provider>    
                <App />       
        </Provider>
    // </React.StrictMode>
);

