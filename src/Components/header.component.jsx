import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className="logo">
                    formplex <span className='motto'> ... registration made easy !!!</span>
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
