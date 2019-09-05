import { Favorite } from '../favorites/favorites.interface';

export interface ActionsLog {
  id: number;
  favorite: Favorite;
  type: string;
}
