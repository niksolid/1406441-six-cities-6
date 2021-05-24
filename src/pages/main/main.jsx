import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Places from '../../components/places/places';
import MainMap from '../../components/main-map/main-map';
import Header from '../../components/header/header';
import LocationList from '../../components/main/locations-list/locations-list';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {fetchOfferList} from '../../store/api-actions';

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
