import React, { Component, Fragment } from "react";

import "../todo.css";
class Todo extends Component {
  render(props) {
    const { handleDelete } = this.props;
    return (
      <Fragment>
        <div className="todoDisplay">
          <h4>YOUR TODO'S</h4>
          <ul>
            {this.props.list.map((list) => (
              <li key={list.id}>
                <button className="check">
                  <i className="fas fa-check"></i>
                </button>
                {list.newItem}
                <div className="btndel">
                  <button className="del" onClick={() => handleDelete(list.id)}>
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
