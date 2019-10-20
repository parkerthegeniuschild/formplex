import React, { Component } from "react";
import { DatePicker } from "antd";

export default class Birthday extends Component {
    render() {
        return (
            <div>
                <DatePicker className='birthday' placeholder='Birthday'/>
            </div>
        )
    }
}
