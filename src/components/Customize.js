import React from 'react';
import Part from './Part';

export default class Customize extends React.Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
    return <Part updateFeature={this.props.updateFeature} state={this.props.state} features={this.props.features} feature={feature} idx={idx} USD={this.props.USD}/>
})
    return features;
};
}