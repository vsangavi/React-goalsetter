import React, { Component, Fragment } from "react";

import "../todo.css";
class Todo extends Component {
  render(props) {
    return (
      <Fragment>
        <div className="todoDisplay">
          <h4>YOUR TODO'S</h4>
          <ul>
            {this.props.list.map((list) => (
              <li key={list.id}>
                {list.newItem}
                <div>
                <button className="btnedit">
                  <i className="fa fa-edit"></i>
                </button>
                <button >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Todo;
