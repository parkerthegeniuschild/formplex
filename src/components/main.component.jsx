import React from 'react';
import Header from "./header.component";
import RegistrationForm from "./newform.component";
import UsersTable from "./table.component";

import 'antd/dist/antd.css';

const App = () => {

    return (
        <div className="App">
            <Header />
            <RegistrationForm />
            <UsersTable/>
            <br/><br/>
        </div>
    );
};

export default App;
