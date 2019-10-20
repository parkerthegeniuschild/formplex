import React, { Component } from "react";
// import { Button } from "antd";
// import Table from "./table.component";

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className="description">
                    <h1>
                        Form Plex ... <span className='motto'>registration made easy</span>
                    </h1>
                </div>

                <div className="controls">
                    <div className="register">
                        register users
                    </div>

                    <div className="view">
                        view users
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
