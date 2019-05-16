import { checkIfPointIsInShip } from './PointHasAShip';

export default (column, row, ships) => ships.find(ship => checkIfPointIsInShip(column, row, ship));