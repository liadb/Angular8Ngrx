import * as FavoriteActions from './../actions/favorites.actions';
import { Favorite} from '../favorites/favorites.interface';

export function reducerFavorites(state: Favorite[] = JSON.parse(localStorage.getItem('Favorites')) || [], action: FavoriteActions.Actions) {
  switch (action.type) {
    case FavoriteActions.ADD_FAVORITE:
      action.payload.id = +new Date();
      localStorage.setItem('Favorites', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case FavoriteActions.REMOVE_FAVORITE:
      const index = state.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('Favorites', JSON.stringify([...state]));
      return [...state];
    case FavoriteActions.EDIT_FAVORITE:
      const editIndex = state.findIndex(i => i.id === action.payload.id);
      if (editIndex !== -1) {
        state[editIndex] = action.payload;
      }
      localStorage.setItem('Favorites', JSON.stringify([...state]));
      return [...state];
    default:
      return state;
  }
}
