import React from "react";
import PropTypes from 'prop-types';

const RoomGoods = ({goods}) => {

  return (
    <ul className="property__inside-list">
      {
        goods.map((good) => (
          <li key={good} className="property__inside-item">
            {good}
          </li>
        ))
      }
    </ul>
  );
};

RoomGoods.propTypes = {
  goods: PropTypes.array.isRequired
};

export default RoomGoods;
