import React, {useEffect, createRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {cityCoords} from "../../const";


const mapRef = createRef();

const MainMap = ({offers, city, activeCard}) => {
  const startZoom = 13;

  let cityCoord;

  useEffect(() => {
    cityCoord = cityCoords[city];

    mapRef.current = leaflet.map(`map`, {
      center: cityCoord,
      zoom: startZoom,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView(cityCoord, startZoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;
        <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.map((offer) => {
      const icon = leaflet.icon({
        iconUrl: `/img/pin.svg`,
        iconSize: [30, 30],
        className: `cities__map-icon--${offer.id}`
      });
      const offerLocations = offer.location;
      const offerCords = [offerLocations.latitude, offerLocations.longitude];
      leaflet
        .marker(offerCords, {icon})
        .addTo(mapRef.current);
    });
  }, []);
  useEffect(() => {
    if ((city in cityCoords)) {
      cityCoord = cityCoords[city];
      mapRef.current.setView(cityCoord, 13);
    }
  }, [city]);
  useEffect(() => {
    const citiesMap = document.querySelector(`.cities__map`);
    const activeCurrent = citiesMap.querySelector(`.cities__map-icon--active`);
    const currentOffer = citiesMap.querySelector(`.cities__map-icon--${activeCard}`);
    if (currentOffer) {
      if (activeCurrent) {
        activeCurrent.classList.remove(`cities__map-icon--active`);
        activeCurrent.src = `img/pin.svg`;
      }
      currentOffer.classList.add(`cities__map-icon--active`);
      currentOffer.src = `img/pin-active.svg`;
    }
  }, [activeCard]);

  return (
    <section className="cities__map map" id="map" ref={mapRef} />
  );
};

MainMap.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  activeCard: PropTypes.number.isRequired
};

const mapStateToProps = ({offers, city, activeCard}) => ({
  offers,
  city,
  activeCard
});

export {MainMap};
export default connect(mapStateToProps, null)(MainMap);
