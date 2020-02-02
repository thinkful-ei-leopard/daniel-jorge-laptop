import React from 'react';
import Summary from './Summary';

function Total (props) {
  return ( Object.keys(props.state.selected).reduce(
  (acc, curr) => acc + props.state.selected[curr].cost,
  0
))
}

function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary USD={props.USD} state={props.state}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {props.USD.format(Total(props))}
              </div>
            </div>
          </section>
    )
}

export default Cart;