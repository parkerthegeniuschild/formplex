import React, { Component } from "react";
import dummyData from '../dummydata';

export default class Table extends Component {

    componentDidMount() {
        // seed the localStorage with dummy data
        this.localStorageSeeder();
        this.displayUser()
    }

    localStorageSeeder = () => {

        // if there is data, then don't seed
        if (!localStorage.getItem('formplex')) {
            localStorage.setItem('formplex', JSON.stringify(dummyData));
        }
    };

    displayUser = () => {
        const users = JSON.parse(localStorage.getItem('formplex')) || [];

        let info = '';
        for (let i = 0; i < users.length; i++) {
             info += `<tr>
                    <th> ${users[i]['first_name']} </th>
                    <th> ${users[i]['last_name']} </th>
                    <th> ${users[i]['birthday']} </th>
                    <th> ${users[i]['age']} </th>
                    <th> ${users[i]['hobby']} </th>
                </tr>`
        };

        const div = document.querySelector('.main-table');
        div.innerHTML = info;
    };

    render() {
        return (
            <div>
                <table className="minimalistBlack">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthday</th>
                            <th>Age</th>
                            <th>Hobby</th>
                        </tr>
                    </thead>

                    <tbody className='main-table'>
                    </tbody>
                </table>

                <br/><br/><br/>
            </div>
        )
    }
}
