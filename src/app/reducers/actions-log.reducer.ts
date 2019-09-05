import {ActionsLog} from '../actions-log/actions-log.interface';
import * as ActionsLogActions from '../actions/actions-log.actions';

export function reducerActionLogs(state: ActionsLog[] =
                                  JSON.parse(localStorage.getItem('ActionsLog')) || [],
                                  action: ActionsLogActions.Actions) {
  switch (action.type) {
    case ActionsLogActions.ADD_ACTIONS_LOG:
      localStorage.setItem('ActionsLog', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case ActionsLogActions.REMOVE_ACTIONS_LOG:
      const index = state.findIndex(i => i.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('ActionsLog', JSON.stringify([...state]));
      return [...state];
    default:
      return state;
  }
}
