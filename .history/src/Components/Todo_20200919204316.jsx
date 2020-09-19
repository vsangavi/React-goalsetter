import React, { Component, Fragment } from "react";

import "../todo.css";
class Todo extends Component {
  render(props) {
    return (
      <Fragment>
        <h4>TODO'S</h4>
        <div className="outer">
          <ul className="result">
            {this.props.list.map((list) => (
              <li key={list.id}>
                <div></div>
                {""} {list.newItem}
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Todo;
