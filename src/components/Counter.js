import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCount, decreaseCount } from "../actions/counter.js";

function Counter({ count, increaseCount, decreaseCount }) {
  return (
    <div>
      <button onClick={() => decreaseCount()}>-</button>
      <span>{count}</span>
      <button onClick={() => increaseCount()}>+</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      increaseCount,
      decreaseCount,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
