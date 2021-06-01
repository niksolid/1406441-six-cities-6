import React from "react";
import PropTypes from 'prop-types';

const RoomHost = ({avatarUrl, isPro, name, description}) => {

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper user__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``}`}>
          <img className="property__avatar user__avatar" src={avatarUrl} alt="Host avatar"
            width={74} height={74}/>
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

RoomHost.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default RoomHost;
