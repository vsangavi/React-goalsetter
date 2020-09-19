import React, { Fragment } from "react";

import "./App.css";
import Form from ".";
class App extends React.Component {
  

  render() {
    return (
      <Fragment>
        <div className="box">
          <h1>
            <i className="fas fa-clipboard-list"></i>
            {"  "}GoalSetter
          </h1>
        </div>

        <Form/>
      </Fragment>
    );
  }
}
export default App;
