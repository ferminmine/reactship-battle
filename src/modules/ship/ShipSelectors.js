import { createSelector } from 'reselect';

const getShipsToPlace = state => state.ships.shipsToPlace;

export const nextShipToPlaceSelector = createSelector(
  getShipsToPlace,
  shipsToPlace => (shipsToPlace && shipsToPlace[0]) || undefined
);
