import React, {useEffect, createRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

const city = [52.38333, 4.9];

const MainMap = ({offers}) => {

  const mapRef = createRef();

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const startZoom = 12;

    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom: startZoom,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView(city, startZoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.map((offer) => {
      const offerLocations = offer.location;
      const offerCords = [offerLocations.latitude, offerLocations.longitude];
      leaflet
        .marker(offerCords, {icon})
        .addTo(mapRef.current);

    });

    // return () => console.log('unmount');
  }, []);

  return (
    <section className="cities__map map" id="map" ref={mapRef} />
  );
};

MainMap.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default MainMap;
