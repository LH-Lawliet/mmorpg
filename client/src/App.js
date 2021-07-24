import React from "react";
import socketIOClient from "socket.io-client";
import {LoginRegister} from "./connection/LoginRegister.js";
let texts = require("./language/textEN.json")

const ENDPOINT = "http://127.0.0.1:4001";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      account: null,
      currentLanguage:'EN'
    };

    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      this.setTimeStamp(data)
    });
    this.timestamp = 0
    this.chooseWhatToRender = this.chooseWhatToRender.bind(this)
    this.getLabel = this.getLabelText.bind(this)
  }

  getLabelText(code) {
    return texts[code] || ("NoLabel_"+code)
  }

  setTimeStamp(ts) {
    this.timestamp = ts
  }

  chooseWhatToRender() {
    let elements = []
    if (!this.state.account) {
      elements.push(<LoginRegister key='LoginRegister' labels={this.getLabelText}/>)
    }
    return elements
  }

  render() {
    let elements = this.chooseWhatToRender()
    return (
      <div>
        {elements}
      </div>
    );
  }
}

export default App;