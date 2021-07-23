import React from "react";

export class Register extends React.Component {
    constructor(data) {
        super(data)
        this.state = {};
        this.labels = data.labels
    }

    render() {
        return (
            <div id='Register'>
                <div id="identifierDiv">
                    <label htmlFor="name">{this.labels("username")}:</label>
                    <input type="text" className="registerInput" id="RegisterUsername" name={this.labels("username")} required minLength="3"/>
                </div>
                <div id="emailDiv">
                    <label htmlFor="email">{this.labels("email")}:</label>
                    <input type="text" className="registerInput" id="RegisterEmail" name={this.labels("email")} required minLength="3"/>
                </div>
                <div id="passwordDiv">
                    <label htmlFor="password">{this.labels("password")}:</label>
                    <input type="password" className="registerInput" id="LoginPassword" name={this.labels("password")} required minLength="5"/>
                </div>
                <div id="password2Div">
                    <label htmlFor="password2">{this.labels("passwordConfirmation")}:</label>
                    <input type="password" className="registerInput" id="LoginPassword2" name={this.labels("passwordConfirmation")} required minLength="5"/>
                </div>
            </div>
        )
    }
}
