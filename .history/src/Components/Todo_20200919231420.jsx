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
                <button className="btnedit">
                  <i className="fa fa-edit"></i>
                </button>
                <button className="btndel">
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
