import React from 'react';
import Summary from './Summary';
import Total from './Total';

function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary USD={this.props.USD} state={this.props.state}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USD.format(<Total state={this.props.state}/>)}
              </div>
            </div>
          </section>
    )
}

export default Cart;