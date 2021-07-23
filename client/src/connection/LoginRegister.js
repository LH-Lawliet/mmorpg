import React from "react";
import {Login} from "./Login.js";
import {Register} from "./Register.js";
import {HorizontalButtonList} from '../buttons/HorizontalButtonList.js'


export class LoginRegister extends React.Component {
    constructor(data) {
        super(data)
        this.state = {
            target:"login"
        };
        this.labels = data.labels
        this.renderLoginOrRegister = this.renderLoginOrRegister.bind(this)
        this.getNeededHorizontalButtons = this.getNeededHorizontalButtons.bind(this)
        this.setTarget = this.setTarget.bind(this)
    }

    setTarget(target) {
        this.setState({target:target})
    }

    renderLoginOrRegister() {
        if (this.state.target === "login") {
            return (<Login labels={this.labels}/>)
        } else {
            return (<Register labels={this.labels}/>)
        }
    }

    getNeededHorizontalButtons() {
        return [
            {"text":this.labels("login"), "callback":()=>{this.setTarget("login")}},
            {"text":this.labels("register"), "callback":()=>{this.setTarget("register")}}
        ]
    }


    render() {
        return (
            <div id='LoginRegister'>
                <HorizontalButtonList listOfButtons={this.getNeededHorizontalButtons}/>
                {this.renderLoginOrRegister()}
            </div>
        )
    }
}
