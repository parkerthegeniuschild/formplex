import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Components/header.component";
import Table from "./Components/table.component";
import WrappedRegistrationForm from './Components/newform.controller';

import './index.css';
import 'antd/dist/antd.css';
import './Components/table.component.css'
import * as serviceWorker from './serviceWorker';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <WrappedRegistrationForm />
                <Table />
            </div>
        )
    }
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
