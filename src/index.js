import React, { Component } from "react";
import ReactDOM from "react-dom";
import makeCall from "./ajaxCall";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    makeCall("https://p7ojo.mocklab.io/racm")
      .then(result => {
        this.setState({
          data: result[0].documentContent
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  render() {
    return (
      <div>
        {(() => {
          return this.state.data.map(link => {
            return (
              <div>
                <h5>{link.fieldLabel}</h5>
                <p
                  dangerouslySetInnerHTML={{ __html: link.fieldDescription }}
                />
              </div>
            );
          });
        })()}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);