import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import ListOffers from './list-offers/list-offers';
import {setOffersCity} from "../../utils";
import {chooseCityOffers} from "../../store/action";

const Places = ({offers, city, cityOffers, onSelectedOffers}) => {
  cityOffers = setOffersCity(offers, city);
  useEffect(() => onSelectedOffers(cityOffers), [city]);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cityOffers.length} places to stay in {city}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <ListOffers />
    </section>
  );
};


Places.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  cityOffers: PropTypes.array.isRequired,
  onSelectedOffers: PropTypes.func.isRequired
};

const mapStateToProps = ({city, offers, cityOffers}) => ({
  city,
  offers,
  cityOffers
});

const mapDispatchToProps = (dispatch) => ({
  onSelectedOffers(cityOffers) {
    dispatch(chooseCityOffers(cityOffers));
  }
});

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
