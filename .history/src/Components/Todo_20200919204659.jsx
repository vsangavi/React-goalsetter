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
              <div className="todoDisplay">
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
