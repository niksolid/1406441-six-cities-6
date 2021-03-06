import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import FavoritesCard from '../../components/favorites-card/favorites-card';

const Favorites = ({offers}) => (
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
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  offers.map((offer) =>
                    <FavoritesCard
                      key={offer.id}
                      id={offer.id}
                      price={offer.price}
                      title={offer.title}
                      previewImage={offer.preview_image}
                      type={offer.type}
                      isPremium={offer.is_premiume}
                      isFavorite={offer.is_favorite}
                    />
                  )
                }
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
      </a>
    </footer>
  </div>
);

Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = ({offers}) => (
  offers
);

export {Favorites};
export default connect(mapStateToProps, null)(Favorites);
