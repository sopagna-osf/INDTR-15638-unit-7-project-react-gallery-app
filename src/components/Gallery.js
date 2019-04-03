import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem';
import NoSearchResult from './NoSearchResult';

const Gallery = (props) => {
  let photos;
  if (props.photos.length > 0) {
    photos = props.photos.map((photo, index) => <GalleryItem {...photo} key={index} />);
  } else {
    photos = <NoSearchResult />
  }

  return (
    <div className="photo-container">
      { props.photos.length > 0 ? <h2>{props.title}</h2> : null }
      <ul>
        { photos }
      </ul>
    </div>
  );
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string
};

Gallery.defaultProps = {
  title: 'Results',
  photos: []
};

export default Gallery;