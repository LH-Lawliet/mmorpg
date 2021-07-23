import React from "react";

export class Login extends React.Component {
    constructor(data) {
        super(data)
        this.state = {};
        this.labels = data.labels
    }

    render() {
        return (
            <div id='Login'>
                <div id="identifierDiv">
                    <label htmlFor="name">{this.labels("usernameOrEmail")}:</label>
                    <input type="text" className="loginInput" id="LoginUsernameOrEmail" name={this.labels("usernameOrEmail")} required minLength="3"/>
                </div>
                <div id="passwordDiv">
                    <label htmlFor="name">{this.labels("password")}:</label>
                    <input type="password" className="loginInput" id="LoginPassword" name={this.labels("password")} required minLength="5"/>
                </div>
            </div>
        )
    }
}
