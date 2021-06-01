export const setOffersCity = (offers, city) => {
  let offersCity = [];
  offers.map((offer) => {
    if (offer.city.name === city) {
      offersCity.push(offer);
    }
  });
  return offersCity;
};

export const getActiveOffer = (offers, id) => {
  let offer;
  offers.forEach((item) => {
    if (item.id === id) {
      offer = item;
    }
  });
  return offer;
};
