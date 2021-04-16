import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {connect} from 'react-redux';

const IsLogined = ({authorizationStatus, userName}) => (
  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
    <div className="header__avatar-wrapper user__avatar-wrapper">
    </div>
    <span className="header__user-name user__name">{authorizationStatus === AuthorizationStatus.AUTH ? userName : `Sign in`}</span>
  </Link>
);

IsLogined.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userName: state.userName
});

export {IsLogined};
export default connect(mapStateToProps, null)(IsLogined);
