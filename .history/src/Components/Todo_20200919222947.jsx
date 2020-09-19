import React, { Component, Fragment } from "react";

import "../todo.css";
class Todo extends Component {
  render(props) {
    return (
      <Fragment>
        <h4>YOTODO'S</h4>
        <div className="todoDisplay">
          <ul className="result">
            {this.props.list.map((list) => (
              <li key={list.id}>
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
