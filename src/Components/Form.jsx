import React, { Component, Fragment } from "react";
import Todo from "./Todo";
class Form extends Component {
  constructor(props) {
    super();
    this.state = { list: [], newItem: "" };
  }
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };
  handleDelete = (id) => {
    const newList = [...this.state.list];
    const updatedList = newList.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newItem.length === 0) {
      return;
    }
    const text = {
      newItem: this.state.newItem,
      id: Date.now(),
    };
    const list = this.state.list;
    list.push(text);
    this.setState({
      list,
      newItem: "",
    });
  };
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
          <button className="done">Add</button>
          {"    "}
        </form>
        <Todo list={this.state.list} handleDelete={this.handleDelete} />
      </Fragment>
    );
  }
}
export default Form;
