import React, { Component, Fragment } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
class Form extends Component {
  constructor(props) {
    super();
    this.state = { list: [], newItem: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      newItem: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newItem.length === 0) {
      return;
    }
    const text = {
      newItem: this.state.newItem,
      id: uuidv4(),
    };
    const list = this.state.list;
    list.push(text);
    this.setState({
      list,
      newItem: "",
    });
  }
  render(props) {
    return (
      <Fragment>
        <form className="todo" onSubmit={this.handleSubmit}>
          <input
            className="inp"
            type="text"
            name="todos "
            value={this.state.newItem}
            onChange={this.handleChange}
            placeholder="Enter your tasks"
          ></input>
          {"    "}
          <div className="butt">
            
          </div>
        </form>

        <Todo list={this.state.list} />
      </Fragment>
    );
  }
}

export default Form;
