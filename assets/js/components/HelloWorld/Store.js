import {WelpStore} from 'welp';
import {UPDATE_NUMBER} from './Constants'

const Store = new WelpStore(
  {hello: {
    count: 0
  }},
  action => {
    switch (action.type) {
      case UPDATE_NUMBER:
        return Store.updateIn(['hello', 'count'], _ => action.data);
    }
  }
);

export default Store;
