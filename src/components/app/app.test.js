import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const ERRORS_COUNT = 3;

describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const tree = renderer
      .create(<App
        errorsCount={ERRORS_COUNT}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
