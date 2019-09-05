import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as FavoritesActions from '../actions/favorites.actions';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AddActionsLog } from '../actions/actions-log.actions';

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  public CreateActionsLog$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<CustomAction>(FavoritesActions.REMOVE_FAVORITE, FavoritesActions.ADD_FAVORITE, FavoritesActions.EDIT_FAVORITE),
      map(action => new AddActionsLog({id: +new Date(), favorite: action.payload, type: action.type})))
  );
}
