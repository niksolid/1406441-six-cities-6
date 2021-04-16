import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const ListOffers = ({offers, city}) => {
  const [activeCard, setActiveCard] = useState(offers[0].id);

  const handleMouseEnter = (id) => {
    setActiveCard(id);
  };

  console.log(city)
  console.log(activeCard)

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) =>
          <PlaceCard
            key={offer.id}
            id={offer.id}
            previewImage={offer.preview_image}
            price={offer.price}
            title={offer.title}
            type={offer.type}
            isPremium={offer.is_premium}
            isFavorite={offer.is_favorite}
            onMouseEnter={handleMouseEnter}
            isActiveCard={activeCard === offer.id}
          />)
      }
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city
});

export {ListOffers};
export default connect(mapStateToProps, null)(ListOffers);
