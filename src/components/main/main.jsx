import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Places from '../places/places';
import MainMap from '../main-map/main-map';
import Header from '../header/header';
import LocationList from '../locations-list/locations-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOfferList} from '../../store/api-actions';
import {connect} from 'react-redux';

const Main = ({isDataLoaded, onLoadData}) => {
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places />
            <div className="cities__right-section">
              <MainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOfferList());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
