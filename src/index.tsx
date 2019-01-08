import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import "./styles.css";

class App extends React.Component {
  div: any;

  mouse_move = e => {
    console.log("page X", e.pageX);
    console.log("page Y", e.pageY);

    console.log("client X", e.clientX);
    console.log("client Y", e.clientY);

    console.log("parent", this.div.parentNode.scrollTop);

    console.log("bounded", this.div.getBoundingClientRect());

    const coord_x_with_scroll =
      e.pageX -
      this.div.getBoundingClientRect().x +
      e.target.parentNode.scrollTop;

    const coord_y_with_scroll =
      e.pageY -
      this.div.getBoundingClientRect().y +
      e.target.parentNode.scrollTop;

    console.log("coord using pageX", coord_x_with_scroll);

    console.log("coord using pageY", coord_y_with_scroll);

    // mouse position minus elm position is mouseposition relative to element:
    document.getElementById("coordinates").innerHTML =
      " X Position: " +
      coord_x_with_scroll +
      " Y Position: " +
      coord_y_with_scroll;
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <div
          id="container"
          style={{
            position: "relative",
            width: "400px",
            height: "400px",
            "margin-left": "40px",
            "overflow-y": "scroll"
          }}
        >
          <div
            style={{
              position: "relative",
              height: "1000px"
            }}
            ref={node => (this.div = node)}
            onMouseMove={this.mouse_move}
          >
            divchild
            <div style={{ position: "absolute", top: "100px" }}>COOL</div>
          </div>
        </div>
        <div id="coordinates" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
