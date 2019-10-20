import React, { Component } from "react";
import { Input } from "antd";
import { Button } from "antd";
import Birthday from "./birthday.component";

import 'antd/dist/antd.css';

class Register extends Component {

    constructor() {
        const users = [];

        if (localStorage.getItem('formplex') !== null) {
            users.push(JSON.parse(localStorage.getItem('formplex')))
        }

        super();
        this.state = {
            users,
            singleUser: {
                first_name: '',
                last_name: '',
                birthday: '',
                age: '',
                hobby: '',
            }
        };
    }

    addUser = async e => {

        e.preventDefault();

        const newUser = this.state.singleUser;
        const allUsers = JSON.parse(localStorage.getItem('formplex'))  || [];

        allUsers.push(newUser);
        localStorage.setItem('formplex', JSON.stringify(allUsers));

        await this.setState({
            users: allUsers
        });

        window.location.reload();
    };

    handleOnChange = e => {
        e.preventDefault();
        const field = e.target.className.split(' ')[1];
        const value = e.target.value;
        const singleUser  = { ...this.state.singleUser };

        singleUser[field] = value;

        this.setState({
            singleUser
        });
    };

    render() {
        return (
            <div onChange={this.handleOnChange} className="form-container">

                <br/><br/>

                <p>
                    <Input className='first_name' placeholder='First Name'/>
                </p>
                <p>
                    <Input className='last_name' placeholder='Last Name'/>
                </p>

                <Birthday />

                <br/>

                <p>
                    <Input className='age' placeholder='Age'/>
                </p>
                <p>
                    <Input className='hobby' placeholder='Hobby'/>
                </p>

                <br/>

                <Button className='submit-btn' onClick={this.addUser}> SUBMIT FORM </Button>

                <br/><br/><br/><br/>

            </div>
        );
    };
}

export default Register
