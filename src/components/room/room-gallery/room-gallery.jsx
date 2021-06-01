import React from "react";
import PropTypes from 'prop-types';

const RoomGallery = ({images}) => {

  return (
    <div className="property__gallery">
      {
        images.map((image, i) => (
          (i < 6) &&
          <div key={i} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Photo studio"/>
          </div>
        ))
      }
    </div>
  );
};

RoomGallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default RoomGallery;
