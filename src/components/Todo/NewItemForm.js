import React from "react";
import { connect } from "react-redux";
import { changeNewItemText } from "../../ducks/todos";
import { addNewItem } from "../../ducks/todos";
import "./NewItemForm.css";

class NewItemForm extends React.Component {
  render() {
    return (
      <div className="NewItemForm">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addNewItem();
          }}
        >
          <input
              className="todoInputNew"
            type="text"
            value={this.props.newItemText}
            onChange={e => this.props.changeNewItemText(e.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    newItemText: state.todos.newItemText
  }),
  { addNewItem, changeNewItemText }
)(NewItemForm);
