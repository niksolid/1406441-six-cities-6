import React from 'react';
import {Link} from "react-router-dom";

const Styles = {
  NOT_FOUND_TITLE: {
    margin: `50px`,
    marginBottom: `0`,
    textAlign: `center`,
    fontStyle: `oblique`,
    fontWeight: `700`,
    fontSize: `40px`
  },
  MAIN_PAGE_LINK: {
    margin: `20px`,
    padding: `9px 21px 6px 11px`,
    paddingBottom: `100px`,
    display: `block`,
    textAlign: `center`,
    fontStyle: `oblique`,
    fontSize: `19px`,
    fontWeight: `300`
  }
};

const NotFound = () =>
  (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <h1 style={Styles.NOT_FOUND_TITLE}>
          404 Not Found
        </h1>
        <Link className="locations__item-link" to="/" style= {Styles.MAIN_PAGE_LINK}>
          <p>Go to main page</p>
        </Link>
      </main>
    </div>
  );

export default NotFound;
