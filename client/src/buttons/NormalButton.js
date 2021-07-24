import React from "react";

export class NormalButton extends React.Component {
    constructor(data) {
        super()
        this.state = {};
        this.callback = data.callback
        this.text = data.text || ""
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        if (this.callback) {
            this.callback()
        }
    }

    render() {
        return (
            <button className="NormalButton" onClick={this.onClick}>{this.text}</button>
        )
    }
}
