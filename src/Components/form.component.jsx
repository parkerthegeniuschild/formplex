import React, { Component } from "react";
import { Input } from "antd";
import { Button } from "antd";
import Birthday from "./birthday.component";

import 'antd/dist/antd.css';

class Register extends Component {

    constructor() {
        const users = [];

        if (localStorage.getItem('users') !== null) {
            users.push(JSON.parse(localStorage.getItem('users')))
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

        console.log('Before Change: ', this.state.users);
    }

    addUser = async e => {

        e.preventDefault();

        const newUser = this.state.singleUser;
        const allUsers = JSON.parse(localStorage.getItem('users'))  || [];

        allUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(allUsers));

        await this.setState({
            users: allUsers
        });

        // console.log('after change', this.state.users);

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

    // removeUser = index => {
    //     let newUsers = [...this.state.users];
    //
    //     // remove element
    //     newUsers.splice(index, 1);
    //
    //     // decrement greater indexes
    //     for (let i = index; i < newUsers.length; i++) {
    //         newUsers[i].index -= 1;
    //     }
    //
    //     // update state
    //     this.setState({
    //         users: newUsers,
    //     })
    // };

    // setDate = (index, date, dateString) => {
    //   let newUsers = [...this.state.users];
    //   newUsers[index].date = date;
    //   newUsers[index].dateString = dateString;
    //
    //   // initialize the state
    //     this.setState({
    //         users: newUsers,
    //     })
    // };

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

                <br/><br/><br/>

                <Button className='submit-btn' onClick={this.addUser}> SUBMIT FORM </Button>

                <br/><br/>

                {/*<List*/}
                {/*    locale={{ emptyText: 'No users found' }}*/}
                {/*    dataSource={this.state.users}*/}
                {/*    renderItem={item => (*/}
                {/*        <List.Item>{item.data}</List.Item>*/}
                {/*    )}*/}
                {/*/>*/}
            </div>
        );
    };
}

// class User extends React.Component {
//     remove = () => {
//         this.props.removeUser(this.props.user.index);
//     };
//
//     render() {
//         return (
//             <div>
//                 <List.Item
//                     actions={[
//                         <Icon
//                             type='closed-circle'
//                             theme='filled'
//                             onClick={this.remove}
//                             />
//                     ]}
//                     >
//                     {this.props.todo.content}
//                 </List.Item>
//             </div>
//         );
//     }
// }

export default Register
