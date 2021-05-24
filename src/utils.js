export const setOffersCity = (offers, city) => {
  let offersCity = [];
  offers.map((offer) => {
    if (offer.city.name === city) {
      offersCity.push(offer);
    }
  });
  return offersCity;
};
