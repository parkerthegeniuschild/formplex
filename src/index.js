import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main.component'
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from './store/index.store'
import './assets/css/index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , rootElement
);

serviceWorker.unregister();
