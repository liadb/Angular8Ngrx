import {Component, ElementRef, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {Favorite} from './favorites.interface';
import {FavoriteDialogComponent} from './favorite-dialog/favorite-dialog.component';
import {MatDialog} from '@angular/material';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as FavoriteActions from '../actions/favorites.actions';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor() {
  }

  transform(favorites: Favorite[], text: string): Favorite[] {
    return favorites.filter(fav => fav.name.toLowerCase().includes(text.toLowerCase()));
  }
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorites$: Observable<Favorite[]>;
  public searchText = '';

  @ViewChild('search', {static: true}) searchRef: ElementRef;

  constructor(private store: Store<AppState>,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.favorites$ = this.store.select('favorites');
  }

  public onAddClick() {
    this.dialog.open(FavoriteDialogComponent, {
      width: '250px',
      data: {favorite: {} as Favorite}
    });
  }

  public onOpenClick(favorite: Favorite) {
    window.open(favorite.url);
  }

  public onODeleteClick(favorite: Favorite) {
    this.store.dispatch(new FavoriteActions.RemoveFavorite(favorite));
  }

  public onOEditClick(favorite: Favorite) {
    this.dialog.open(FavoriteDialogComponent, {
      width: '250px',
      data: {favorite}
    });
  }
}
