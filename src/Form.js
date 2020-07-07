import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            placeholder="Enter New Item"
            onChange={this.props.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
