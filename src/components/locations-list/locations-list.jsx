import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CITIES} from '../../const';
import {ActionCreator} from '../../store/action';

const LocationsList = ({changeCity, city}) => {

  const cityClickHandler = (currentCity) => {
    changeCity(currentCity);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((item, index) =>
            <li key={`${item} + ${index}`} className="locations__item">
              <a className={`locations__item-link tabs__item ${item === city ? `tabs__item--active` : ``}`} href="#">
                <span onClick={() => cityClickHandler(item)}>{item}</span>
              </a>
            </li>
          )
        }
      </ul>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

const mapStateToProps = ({city}) => ({
  city
});

LocationsList.propTypes = {
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
