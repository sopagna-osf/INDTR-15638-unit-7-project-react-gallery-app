import React from 'react';
import PropTypes from 'prop-types';

class GalleryItem extends React.PureComponent {
  render () {
    const { title, url } = this.props;
    
    return (
      <li>
        <img src={url} alt={title} />
      </li>
    );
  };
}

GalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default GalleryItem;