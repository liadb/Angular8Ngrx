import { Favorite } from './favorites/favorites.interface';
import { ActionsLog } from './actions-log/actions-log.interface';

export interface AppState {
  readonly favorites: Favorite[];
  readonly actionsLog: ActionsLog[];
}
