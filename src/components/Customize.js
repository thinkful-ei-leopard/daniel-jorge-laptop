import React from 'react';
import Part from './Part';

class Customize extends React.Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      <Part updateFeature={this.props.updateFeature} features={this.props.features} feature={feature} idx={idx} USD={this.props.USD}/>
})
    return features;
};

export default Customize;