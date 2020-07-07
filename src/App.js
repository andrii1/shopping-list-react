import React, { Component } from "react";
import Form from "./Form";
import Items from "./Items";

class ControlledComponents2Problem extends Component {
  constructor() {
    super();
    this.state = {
      element: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      element: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.element] //want to add another item to array...
    });
  }

  handleDelete(event) {
    this.setState({
      items: this.state.items.slice(0, -1) //how to remove last item??
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Items items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default ControlledComponents2Problem;
