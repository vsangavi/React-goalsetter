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
                <button className="">
                  <i className="fa fa-trash"></i>
                </button>
                {list.newItem}
                <div className="btndel">
                  <button className="del">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Todo;
