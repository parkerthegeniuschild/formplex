import React from 'react';
import Header from "./header.component";
import RegistrationForm from "./newform.component";
import Table from "./list.component";
import 'antd/dist/antd.css';


const App = () => {
    return (
        <div className="App">
            <Header />
            <RegistrationForm />
            <Table/>
            <br/><br/>
        </div>
    );
};

export default App;
