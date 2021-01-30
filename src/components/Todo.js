import React from "react";

export class Todo extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="card mt-4 ml-2 p-3">
        <div className="card-header">
          <h4>{this.props.text}</h4>
        </div>
        <div className="card-body">
          Priority: <p className="badge badge-pill badge-warning ml-2">{this.props.priority}</p>
          <p>Date: {this.props.dueDate}</p>
        </div>
      </div>
    );
  }
}
