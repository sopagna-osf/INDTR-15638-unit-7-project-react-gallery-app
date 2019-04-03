import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Gallery from './Gallery';

const Container = (props) => (
  <React.Fragment>
    <Header {...props} />
    <Gallery photos={ props.photos } title={ props.title } />
  </React.Fragment>
);

Container.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchPhotos: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object
};

Container.defaultProps = {
  photos: []
};

export default Container;