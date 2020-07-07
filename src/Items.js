import React from "react";

class Items extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <p className="items">Items</p>
        {items.map((item, id) => (
          <ol className="item-list" key="{id}">
            {items[id]}
          </ol>
        ))}
        <button onClick={this.props.handleDelete}>Delete Last Item</button>
      </div>
    );
  }
}

export default Items;
