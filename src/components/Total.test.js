import React from 'react';
import ReactDOM from 'react-dom';
import Total from './Total';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Total state={{Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
    }}
} 
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });