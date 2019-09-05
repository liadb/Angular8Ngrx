import { Action } from '@ngrx/store';
import { Favorite } from '../favorites/favorites.interface';

export const ADD_FAVORITE       = '[FAVORITE] Add';
export const REMOVE_FAVORITE    = '[FAVORITE] Remove';
export const EDIT_FAVORITE      = '[FAVORITE] Edit';

export class AddFavorite implements Action {
  readonly type = ADD_FAVORITE;

  constructor(public payload: Favorite) {}
}

export class RemoveFavorite implements Action {
  readonly type = REMOVE_FAVORITE;

  constructor(public payload: Favorite) {}
}

export class EditFavorite implements Action {
  readonly type = EDIT_FAVORITE;

  constructor(public payload: Favorite) {}
}

export type Actions = AddFavorite | RemoveFavorite | EditFavorite;
