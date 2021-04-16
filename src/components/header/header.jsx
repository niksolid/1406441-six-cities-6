import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import IsLogined from './is-logined/is-logined';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <IsLogined />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export {Header};
export default connect(null, null)(Header);
// export default Header;
