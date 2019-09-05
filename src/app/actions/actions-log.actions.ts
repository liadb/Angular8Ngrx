import { Action } from '@ngrx/store';
import { ActionsLog } from '../actions-log/actions-log.interface';

export const ADD_ACTIONS_LOG      = '[ACTIONS_LOG] Add';
export const REMOVE_ACTIONS_LOG    = '[ACTIONS_LOG] Remove';

export class AddActionsLog implements Action {
  readonly type = ADD_ACTIONS_LOG;

  constructor(public payload: ActionsLog) {}
}

export class RemoveActionsLog implements Action {
  readonly type = REMOVE_ACTIONS_LOG;

  constructor(public payload: number) {}
}


export type Actions = AddActionsLog | RemoveActionsLog;
