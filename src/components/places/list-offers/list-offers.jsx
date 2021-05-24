import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCard from './place-card/place-card';
import {setActiveCard} from "../../../store/action";

const ListOffers = ({activeCard, cityOffers}) => {
  const handleMouseEnter = (id) => {
    activeCard(id);
  };


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cityOffers.map((offer) =>
          <PlaceCard
            key={offer.id}
            id={offer.id}
            previewImage={offer.preview_image}
            price={offer.price}
            rating={offer.rating}
            title={offer.title}
            type={offer.type}
            isPremium={offer.is_premium}
            isFavorite={offer.is_favorite}
            onMouseEnter={handleMouseEnter}
          />)
      }
    </div>
  );
};

ListOffers.propTypes = {
  cityOffers: PropTypes.array.isRequired,
  activeCard: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  cityOffers: state.cityOffers
});

const mapDispatchToProps = (dispatch) => ({
  activeCard(id) {
    dispatch(setActiveCard(id));
  }
});

export {ListOffers};
export default connect(mapStateToProps, mapDispatchToProps)(ListOffers);
