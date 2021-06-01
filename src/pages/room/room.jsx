import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import CommentPostingForm from '../../components/comment-posting-form/comment-posting-form';
import {Header} from "../../components/header/header";
import {getActiveOffer} from "../../utils";
import RoomGallery from "../../components/room/room-gallery/room-gallery";
import RoomGoods from "../../components/room/room-goods/room-goods";
import RoomFeatures from "../../components/room/room-features/room-features";
import RoomHost from "../../components/room/room-host/room-host";
import {fetchOfferElement, fetchOfferOpened} from "../../store/api-actions";
import LoadingScreen from "../../components/loading-screen/loading-screen";

// todo component: roomProperty. props: images, mark, title, type, rating, price, max_adults
// todo component: . props

const Room = ({offer, nearby, comments}) => {

  const match = useRouteMatch();
  const dispatch = useDispatch();
  const pathId = match.params.id;

  useEffect(() => {
    if (String(offer.id) !== pathId) {
      // onLoadOffer(pathId)
      dispatch(fetchOfferOpened(pathId));
    }
  }, [pathId]);
  if (String(offer.id) !== pathId) {
    return (
      <LoadingScreen />
    );
  }
  console.log(nearby);
  console.log('hohohohohoh');

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <RoomGallery images={offer.images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <RoomFeatures
                isPremium={offer.is_premium}
                title={offer.title}
                rating={offer.rating}
                type={offer.type}
                bedrooms={offer.bedrooms}
                maxAdults={offer.max_adults}
                price={offer.price}
                goods={offer.goods}
              />
              <RoomHost
                name={offer.host.name}
                avatarUrl={offer.host.avatar_url}
                isPro={offer.host.is_pro}
                description={offer.description}
              />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" alt="Reviews avatar"
                             width={54} height={54}/>
                      </div>
                      <span className="reviews__user-name">
                           Max
                           </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: `80%`}}/>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                        The building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                <CommentPostingForm/>
              </section>
            </div>
          </div>
          <section className="property__map map"/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg" alt="Place image" width={260} height={200}/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€80</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button"
                            type="button">
                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `80%`}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-02.jpg" alt="Place image" width={260}
                         height={200}/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€132</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `80%`}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-03.jpg" alt="Place image" width={260}
                         height={200}/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€180</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `100%`}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCard: PropTypes.number.isRequired,
  offer: PropTypes.object.isRequired,
  nearby: PropTypes.array.isRequired,
  comments: PropTypes.object.isRequired,
  // fetchOfferOpened:
};

const mapStateToProps = ({offers, activeCard, offer, nearby, comments}) => ({
  offers,
  activeCard,
  offer,
  nearby,
  comments,
});

// const mapDispatchToProps = (dispatch) => ({
//   onLoadOffer(id) {
//     dispatch(fetchOfferOpened(id));
//   },
// });

export {Room};
export default connect(mapStateToProps, null)(Room);


// export {Room};
// export default connect(mapStateToProps, null)(Room);
