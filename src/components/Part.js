import React from 'react';
import slugify from 'slugify';

function Part(props) {
    const feature = this.props.feature;
    const idx = this.props.idx;
    const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.state.selected[feature].name}
              onChange={e => this.prop.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.USD.format(item.cost)})
            </label>
          </div>
        );
      });

    return (
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{this.props.feature}</h3>
        </legend>
            {options}
        </fieldset>
      );
    }

export default Part;