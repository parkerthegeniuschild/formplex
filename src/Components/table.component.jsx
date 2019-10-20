import React, { Component } from "react";

export default class Table extends Component {

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

                    <tbody>
                        <tr>
                            <td>cell1_1</td>
                            <td>cell2_1</td>
                            <td>cell3_1</td>
                            <td>cell4_1</td>
                            <td>cell5_1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
