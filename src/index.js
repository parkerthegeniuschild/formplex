import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/form.component';
import Header from "./Components/header.component";
import Table from "./Components/table.component";

import './index.css';
import './Components/table.component.css'
import * as serviceWorker from './serviceWorker';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Form />
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
