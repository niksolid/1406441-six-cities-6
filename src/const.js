const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export {CITIES};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id?`
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`
};

export const cityCoords = {
  Paris: [48.83861, 2.351499],
  Cologne: [50.938361, 6.959974],
  Brussels: [50.846557, 4.351697],
  Amsterdam: [52.37454, 4.897976],
  Hamburg: [53.550341, 10.000654],
  Dusseldorf: [51.225402, 6.776314]
};
