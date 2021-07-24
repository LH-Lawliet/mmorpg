import React from "react";

export class HorizontalButtonList extends React.Component {
    constructor(data) {
        super()
        this.state = {
            current:"0",
            listOfButtons: data.listOfButtons()
        };
        this.renderListOfButtons = this.renderListOfButtons.bind(this)
        this.setSelected = this.setSelected.bind(this)
        console.log("constructor listOfButtons")
    }

    setSelected(id) {
        this.setState({current:id})
    }

    renderListOfButtons() {
        let elements = []
        for (let k in this.state.listOfButtons) {
            let buttonData = this.state.listOfButtons[k]
            let className = ""
            if (k === this.state.current) {
                className += " selected"
            }
            if (k === "0") {
                className += " left"
            }
            if (k === (this.state.listOfButtons.length-1).toString()) {
                className += " right"
            }


            let setSelected = this.setSelected
            elements.push(
                <button className={className} key={k} onClick={function () {setSelected(k); if (buttonData.callback) {buttonData.callback()}}}>
                    {buttonData.text}
                </button>
            )
            if (buttonData!==this.state.listOfButtons[this.state.listOfButtons.length-1]) {
                elements.push(
                    <span key={"separator:"+k} >|</span>
                )
            }
        }
        return elements
    }

    render() {
        let ListOfButtons = this.renderListOfButtons()
        return (
            <div className = "horizontalButtonList">
                {ListOfButtons}
            </div>
        )
    }
}
