import React from "react";
import { connect } from "react-redux";
import NewItemForm from "./NewItemForm";
import List from "./List";
import { fetchList } from "../../ducks/todos";

class Todo extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    return (
      <div>
        <NewItemForm />
        <List />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchList }
)(Todo);
