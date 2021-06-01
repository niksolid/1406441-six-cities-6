import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchOfferOpened} from "../../../store/api-actions";

// const OfferRoute = ({render, path, exact, isDataLoaded}) => {
const OfferRoute = ({render, path, exact, fetchOfferOpened}) => {
  // const loaded()
  useEffect(() => {
    fetchOfferOpened();
  }, []);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          (true === true)
            ? render(routeProps)
            : <Redirect to={`/`} />
        );
      }}
    />
  );
};

OfferRoute.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer() {
    dispatch(fetchOfferOpened());
  }
});

export {OfferRoute};
export default connect(mapStateToProps, mapDispatchToProps)(OfferRoute);
