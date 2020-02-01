import React from 'react';
import slugify from 'slugify';

function Part(props) {
    const feature = props.feature;
    const idx = props.idx;
    const featureHash = feature + '-' + idx;
      const options = props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === props.state.selected[feature].name}
              onChange={e => props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({props.USD.format(item.cost)})
            </label>
          </div>
        );
      });

    return (
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{props.feature}</h3>
        </legend>
            {options}
        </fieldset>
      );
    }

export default Part;