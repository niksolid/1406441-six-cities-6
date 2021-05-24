import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CardPremiumMark from '../../../card-premium/card-premium';

const PlaceCard = ({id, previewImage, price, rating, title, type, isPremium, isFavorite, onMouseEnter}) => {
  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  return (
    <article onMouseEnter={handleMouseEnter} className="cities__place-card place-card">
      {isPremium && <CardPremiumMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} alt="Place image" width={260} height={200} />
        </a>
      </div>
      <div className="place-card__info">

        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default PlaceCard;
