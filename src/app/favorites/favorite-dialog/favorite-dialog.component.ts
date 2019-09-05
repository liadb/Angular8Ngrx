import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as FavoriteActions from './../../actions/favorites.actions';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-dialog',
  templateUrl: './favorite-dialog.component.html',
  styleUrls: ['./favorite-dialog.component.scss']
})
export class FavoriteDialogComponent implements OnInit {
  public favoriteForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FavoriteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.favoriteForm = new FormGroup({
      id: new FormControl((this.data.favorite.id)),
      name: new FormControl(this.data.favorite.name, Validators.required),
      url: new FormControl(this.data.favorite.url, Validators.required),
      img: new FormControl(this.data.favorite.img),
    });
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick() {
    const favorite = this.favoriteForm.value;
    this.store.select('favorites').pipe(first()).subscribe(favorites => {
      if (favorites.findIndex(i => i.id === favorite.id) === -1) {
        this.store.dispatch(new FavoriteActions.AddFavorite(favorite));
      } else {
        this.store.dispatch(new FavoriteActions.EditFavorite(favorite));
      }
    });
    this.dialogRef.close();
  }
}
