import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", priority: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      text:
        this.state.text === ""
          ? `Task #${this.state.items.length + 1}`
          : this.state.text,
      priority: this.state.priority,
      dueDate: new Date().toDateString(),
    };
    
    this.setState((prevState) => ({
      items: prevState.items.concat(task),
      text: "",
    }));
    this.props.addTask(task);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3>Register a new Task</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit} className="container">
            <div>
              <label htmlFor="new-todo">New task: </label>{" "}
              <input
                id="new-todo"
                name="text"
                onChange={this.handleChange}
                value={this.state.text}
              />
            </div>
            <div>
              <label htmlFor="priority">Priority: </label>{" "}
              <select
                onChange={this.handleChange}
                name="priority"
                id="priority"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <button className="btn btn-success">
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoForm;
