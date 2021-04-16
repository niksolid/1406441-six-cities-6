import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import ListOffers from '../list-offers/list-offers';

const Places = ({offers, city}) => {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
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
  offers: PropTypes.array.isRequired
};

const mapStateToProps = ({city, offers}) => ({
  city,
  offers
});

export {Places};
export default connect(mapStateToProps, null)(Places);
