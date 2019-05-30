import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../ducks/counter";
import "./counter.css";
class Counter extends React.Component {

  render() {

    return (
      <div className="counter" >
        <h1>ReduxCounter</h1>
          <div>{this.props.count}</div>

        <button onClick={() => this.props.increase(10)}>+10</button>
        <button onClick={() => this.props.decrease(10)}>-10</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

const mapDispatchToProps = { increase, decrease };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
