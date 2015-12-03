import LCARS from 'lcars';
import {UPDATE_NUMBER} from './Constants'

export function update_number(value) {
  LCARS.dispatch({
    type: UPDATE_NUMBER,
    data: value
  });
}
