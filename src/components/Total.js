import React from 'react';

function Total (props) {
    return ( Object.keys(props.state.selected).reduce(
    (acc, curr) => acc + props.state.selected[curr].cost,
    0
  ))
}
  export default Total;