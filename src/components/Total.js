import React from 'react';

function Total (props) {
    return ( Object.keys(this.props.state.selected).reduce(
    (acc, curr) => acc + this.props.state.selected[curr].cost,
    0
  ))
}
  export default Total;