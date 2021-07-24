import React from "react";
import {NormalButton} from '../buttons/NormalButton.js'


export class Login extends React.Component {
    constructor(data) {
        super(data)
        this.state = {};
        this.labels = data.labels
        this.askForLogin = this.askForLogin.bind(this)
    }

    askForLogin() {
        console.log("ASK FOR LOGIN")
    }

    render() {
        return (
            <div id='Login' className="RightLeft">
                <div id="identifierDiv">
                    <label htmlFor="name">{this.labels("usernameOrEmail")}:</label>
                    <input type="text" className="loginInput" id="LoginUsernameOrEmail" name={this.labels("usernameOrEmail")} required minLength="3"/>
                </div>
                <div id="passwordDiv">
                    <label htmlFor="name">{this.labels("password")}:</label>
                    <input type="password" className="loginInput" id="LoginPassword" name={this.labels("password")} required minLength="5"/>
                </div>

                <NormalButton text={this.labels("login")} callback={this.askForLogin}/>
            </div>
        )
    }
}
