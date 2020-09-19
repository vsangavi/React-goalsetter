import React, { Component, Fragment } from "react";

import "../todo.css";
class Todo extends Component {
  render(props) {
    return (
      <Fragment>
        <div className="todoDisplay">
          <h4>YOUR TODO'S</h4>
          <ul>
            <div class>
              {this.props.list.map((list) => (
                <li key={list.id}>
                  {list.newItem}
                  <div className="btndel">
                    <button className="edit">
                      <i className="fa fa-edit"></i>
                    </button>
                    <button className="del">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Todo;
